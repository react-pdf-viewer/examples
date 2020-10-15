import React from 'react';
import { OpenFile, Viewer } from '@react-pdf-viewer/core';
import { downloadPlugin } from '@react-pdf-viewer/download';

import '@react-pdf-viewer/core/styles/index.css';

interface CustomizeFileNameExampleProps {
    fileUrl: string;
}

const CustomizeFileNameExample: React.FC<CustomizeFileNameExampleProps> = ({ fileUrl }) => {
    const downloadPluginInstance = downloadPlugin({
        fileNameGenerator: (file: OpenFile) => {
            // `file.name` is the URL of opened file
            const fileName = file.name.substring(file.name.lastIndexOf('/') + 1);
            return `a-copy-of-${fileName}`;
        },
    });
    const { DownloadButton } = downloadPluginInstance;

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
                <DownloadButton />
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
                        downloadPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizeFileNameExample;