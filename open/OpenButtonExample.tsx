import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { openPlugin } from '@react-pdf-viewer/open';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/open/lib/styles/index.css';

interface OpenButtonExampleProps {
    fileUrl: string;
}

const OpenButtonExample: React.FC<OpenButtonExampleProps> = ({ fileUrl }) => {
    const openPluginInstance = openPlugin();
    const { OpenButton } = openPluginInstance;

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
                    padding: '4px',
                }}
            >
                <OpenButton />
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
                        openPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default OpenButtonExample;