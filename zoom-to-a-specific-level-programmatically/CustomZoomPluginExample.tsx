import * as React from 'react';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

import customZoomPlugin from './customZoomPlugin';

interface CustomZoomPluginExampleProps {
    fileUrl: string;
}

const CustomZoomPluginExample: React.FC<CustomZoomPluginExampleProps> = ({ fileUrl }) => {
    const customZoomPluginInstance = customZoomPlugin();
    const { zoomTo } = customZoomPluginInstance;

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
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <button
                        style={{
                            backgroundColor: '#357edd',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                        onClick={() => zoomTo(SpecialZoomLevel.ActualSize)}
                    >
                        Actual size
                    </button>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <button
                        style={{
                            backgroundColor: '#357edd',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                        onClick={() => zoomTo(SpecialZoomLevel.PageFit)}
                    >
                        Page fit
                    </button>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <button
                        style={{
                            backgroundColor: '#357edd',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                        onClick={() => zoomTo(SpecialZoomLevel.PageWidth)}
                    >
                        Page width
                    </button>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <button
                        style={{
                            backgroundColor: '#357edd',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                        onClick={() => zoomTo(0.5)}
                    >
                        50%
                    </button>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <button
                        style={{
                            backgroundColor: '#357edd',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                        onClick={() => zoomTo(1)}
                    >
                        100%
                    </button>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <button
                        style={{
                            backgroundColor: '#357edd',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                        onClick={() => zoomTo(1.5)}
                    >
                        150%
                    </button>
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
                        customZoomPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomZoomPluginExample;