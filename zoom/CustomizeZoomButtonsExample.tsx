import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps, zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

interface CustomizeZoomButtonsExampleProps {
    fileUrl: string;
}

const CustomizeZoomButtonsExample: React.FC<CustomizeZoomButtonsExampleProps> = ({ fileUrl }) => {
    const zoomPluginInstance = zoomPlugin();
    const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <ZoomOut>
                    {
                        (props: RenderZoomOutProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={props.onClick}
                            >
                                Zoom out
                            </button>
                        )
                    }
                    </ZoomOut>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <CurrentScale>
                    {
                        (props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>
                    }
                    </CurrentScale>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <ZoomIn>
                    {
                        (props: RenderZoomInProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={props.onClick}
                            >
                                Zoom in
                            </button>
                        )
                    }
                    </ZoomIn>
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer
                    fileUrl={fileUrl}
                    plugins={[
                        zoomPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizeZoomButtonsExample;