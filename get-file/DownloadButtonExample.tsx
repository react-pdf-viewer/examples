import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface DownloadButtonExampleProps {
    fileUrl: string;
}

const DownloadButtonExample: React.FC<DownloadButtonExampleProps> = ({ fileUrl }) => {
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

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
                <DownloadButton />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[getFilePluginInstance]} />
            </div>
        </div>
    );
};

export default DownloadButtonExample;
