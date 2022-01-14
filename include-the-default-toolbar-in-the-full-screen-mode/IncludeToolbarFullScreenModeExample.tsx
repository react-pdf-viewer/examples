import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface IncludeToolbarFullScreenModeExampleProps {
    fileUrl: string;
}

const IncludeToolbarFullScreenModeExample: React.FC<IncludeToolbarFullScreenModeExampleProps> = ({ fileUrl }) => {
    const toolbarPluginInstance = toolbarPlugin({
        fullScreenPlugin: {
            getFullScreenTarget: (pagesContainer) => pagesContainer.closest('.js-viewer-container'),
            renderExitFullScreenButton: (props) => <></>,
        },
    });

    const { Toolbar } = toolbarPluginInstance;

    return (
        <div
            className="js-viewer-container"
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
                    padding: '0.25rem',
                }}
            >
                <Toolbar />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[toolbarPluginInstance]} />
            </div>
        </div>
    );
};

export default IncludeToolbarFullScreenModeExample;
