import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { ScrollMode, scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/scroll-mode/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

interface SwitchScrollModeButtonsExampleProps {
    fileUrl: string;
}

const SwitchScrollModeButtonsExample: React.FC<SwitchScrollModeButtonsExampleProps> = ({ fileUrl }) => {
    const scrollModePluginInstance = scrollModePlugin({
        scrollMode: ScrollMode.Horizontal,
    });
    const zoomPluginInstance = zoomPlugin();

    const { SwitchScrollModeButton } = scrollModePluginInstance;
    const { CurrentScale, ZoomInButton, ZoomOutButton } = zoomPluginInstance;

    return (
        <div
            className="rpv-core__viewer"
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
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <SwitchScrollModeButton mode={ScrollMode.Vertical} />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <SwitchScrollModeButton mode={ScrollMode.Horizontal} />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <SwitchScrollModeButton mode={ScrollMode.Wrapped} />
                </div>
                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                    <ZoomOutButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <CurrentScale />
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
                <Viewer fileUrl={fileUrl} plugins={[scrollModePluginInstance, zoomPluginInstance]} />
            </div>
        </div>
    );
};

export default SwitchScrollModeButtonsExample;
