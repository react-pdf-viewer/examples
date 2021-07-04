import * as React from 'react';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { RenderZoomProps, zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

interface CustomizeQuickZoomExampleProps {
    fileUrl: string;
}

const CustomizeQuickZoomExample: React.FC<CustomizeQuickZoomExampleProps> = ({ fileUrl }) => {
    const zoomPluginInstance = zoomPlugin();
    const { Zoom } = zoomPluginInstance;

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
                    <Zoom>
                        {(props: RenderZoomProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={() => props.onZoom(SpecialZoomLevel.ActualSize)}
                            >
                                Actual size
                            </button>
                        )}
                    </Zoom>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <Zoom>
                        {(props: RenderZoomProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={() => props.onZoom(SpecialZoomLevel.PageFit)}
                            >
                                Page fit
                            </button>
                        )}
                    </Zoom>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <Zoom>
                        {(props: RenderZoomProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={() => props.onZoom(SpecialZoomLevel.PageWidth)}
                            >
                                Page width
                            </button>
                        )}
                    </Zoom>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <Zoom>
                        {(props: RenderZoomProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={() => props.onZoom(0.5)}
                            >
                                50%
                            </button>
                        )}
                    </Zoom>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <Zoom>
                        {(props: RenderZoomProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={() => props.onZoom(1)}
                            >
                                100%
                            </button>
                        )}
                    </Zoom>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <Zoom>
                        {(props: RenderZoomProps) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={() => props.onZoom(1.5)}
                            >
                                150%
                            </button>
                        )}
                    </Zoom>
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[zoomPluginInstance]} />
            </div>
        </div>
    );
};

export default CustomizeQuickZoomExample;
