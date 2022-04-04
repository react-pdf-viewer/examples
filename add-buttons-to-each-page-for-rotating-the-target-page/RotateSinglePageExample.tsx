import * as React from 'react';
import { MinimalButton, Position, RotateDirection, Tooltip, Viewer } from '@react-pdf-viewer/core';
import { RotateBackwardIcon, RotateForwardIcon } from '@react-pdf-viewer/rotate';
import type { RenderPage, RenderPageProps } from '@react-pdf-viewer/core';

const TOOLTIP_OFFSET = { left: 0, top: 8 };

interface RotateSinglePageExampleProps {
    fileUrl: string;
}

const RotateSinglePageExample: React.FC<RotateSinglePageExampleProps> = ({ fileUrl }) => {
    const renderPage: RenderPage = (props: RenderPageProps) => (
        <>
            {props.canvasLayer.children}
            <div
                style={{
                    padding: '0.25rem',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    transform: 'translate(100%, 0)',
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '0 auto',
                    }}
                >
                    <Tooltip
                        position={Position.BottomCenter}
                        target={
                            <MinimalButton onClick={() => props.onRotatePage(RotateDirection.Forward)}>
                                <RotateForwardIcon />
                            </MinimalButton>
                        }
                        content={() => 'Rotate clockwise'}
                        offset={TOOLTIP_OFFSET}
                    />
                    <Tooltip
                        position={Position.BottomCenter}
                        target={
                            <MinimalButton onClick={() => props.onRotatePage(RotateDirection.Backward)}>
                                <RotateBackwardIcon />
                            </MinimalButton>
                        }
                        content={() => 'Rotate counterclockwise'}
                        offset={TOOLTIP_OFFSET}
                    />
                </div>
            </div>
            {props.annotationLayer.children}
            {props.textLayer.children}
        </>
    );

    return <Viewer defaultScale={0.5} fileUrl={fileUrl} renderPage={renderPage} />;
};

export default RotateSinglePageExample;
