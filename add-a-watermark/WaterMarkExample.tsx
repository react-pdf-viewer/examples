import * as React from 'react';
import { RenderPage, RenderPageProps, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface WaterMarkExampleProps {
    fileUrl: string;
}

const WaterMarkExample: React.FC<WaterMarkExampleProps> = ({ fileUrl }) => {
    const renderPage: RenderPage = (props: RenderPageProps) => (
        <>
            {props.canvasLayer.children}
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }
            }>
                <div
                    style={{
                        color: 'rgba(0, 0, 0, 0.2)',
                        fontSize: `${8 * props.scale}rem`,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        transform: 'rotate(-45deg)',
                        userSelect: 'none',
                    }}
                >
                    Draft
                </div>
            </div>
            {props.annotationLayer.children}
            {props.textLayer.children}
        </>
    );

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)' }}>
            <Viewer
                fileUrl={fileUrl}
                renderPage={renderPage}
            />
        </div>
    );
};

export default WaterMarkExample;