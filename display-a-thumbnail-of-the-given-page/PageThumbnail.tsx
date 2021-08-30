import * as React from 'react';
import { PdfJs, Spinner, Store, StoreHandler } from '@react-pdf-viewer/core';

import { StoreProps } from './StoreProps';

export const PageThumbnail: React.FC<{
    pageIndex: number;
    store: Store<StoreProps>;
}> = ({ pageIndex, store }) => {
    const [currentDoc, setCurrentDoc] = React.useState<PdfJs.PdfDocument>();

    const handleDocumentChanged: StoreHandler<PdfJs.PdfDocument> = (doc: PdfJs.PdfDocument) => {
        setCurrentDoc(doc);
    };

    // Support high DPI screen
    const devicePixelRatio = window.devicePixelRatio || 1;
    const canvasRef = React.useRef<HTMLCanvasElement>();
    const containerRef = React.useRef<HTMLDivElement>();

    const [rendered, setRendered] = React.useState(false);

    React.useEffect(() => {
        if (!currentDoc) {
            return;
        }

        const containerEle = containerRef.current;
        const canvasEle = canvasRef.current;
        if (!containerEle || !canvasEle) {
            return;
        }

        currentDoc.getPage(pageIndex + 1).then((page) => {
            const viewport = page.getViewport({ scale: 1 });
            const w = viewport.width;
            const h = viewport.height;

            const containerWidth = containerEle.clientWidth;
            const containerHeight = containerEle.clientHeight;

            const scaled = Math.min(containerWidth / w, containerHeight / h);
            const canvasWidth = scaled * w;
            const canvasHeight = scaled * h;

            canvasEle.height = canvasHeight * devicePixelRatio;
            canvasEle.width = canvasWidth * devicePixelRatio;
            canvasEle.style.opacity = '0';

            const canvasContext = canvasEle.getContext('2d', {
                alpha: false,
            }) as CanvasRenderingContext2D;

            const renderViewport = page.getViewport({
                rotation: 0,
                scale: scaled * devicePixelRatio,
            });

            const renderTask = page.render({ canvasContext, viewport: renderViewport });
            renderTask.promise.then(
                (): void => {
                    setRendered(true);
                    canvasEle.style.removeProperty('opacity');
                },
                (): void => {
                    setRendered(true);
                }
            );
        });
    }, [currentDoc]);

    React.useEffect(() => {
        store.subscribe('doc', handleDocumentChanged);

        return () => {
            store.unsubscribe('doc', handleDocumentChanged);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                // Center the canvas
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                // Used to position the spinner
                position: 'relative',
                // Take the full size
                height: '100%',
                width: '100%',
            }}
        >
            {!rendered && (
                <div
                    style={{
                        // Absolute position
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        // Take the full size
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Spinner />
                </div>
            )}
            <canvas
                ref={canvasRef}
                style={{
                    transform: `scale(${1 / devicePixelRatio})`,
                    transformOrigin: `top left`,
                }}
            />
        </div>
    );
};
