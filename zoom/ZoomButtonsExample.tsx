import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/zoom/styles/index.css';

interface ZoomButtonsExampleProps {
    fileUrl: string;
}

const ZoomButtonsExample: React.FC<ZoomButtonsExampleProps> = ({ fileUrl }) => {
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

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
                    <ZoomOutButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <ZoomPopover />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <ZoomInButton />
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

export default ZoomButtonsExample;