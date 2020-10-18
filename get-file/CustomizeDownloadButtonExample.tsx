import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';

import '@react-pdf-viewer/core/styles/index.css';

interface CustomizeDownloadButtonExampleProps {
    fileUrl: string;
}

const CustomizeDownloadButtonExample: React.FC<CustomizeDownloadButtonExampleProps> = ({ fileUrl }) => {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;

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
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                }}
            >
                <Download>
                {
                    (props: RenderDownloadProps) => (
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
                            Download
                        </button>
                    )
                }
                </Download>
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
                        getFilePluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizeDownloadButtonExample;