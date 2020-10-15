import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { openPlugin, RenderOpenProps } from '@react-pdf-viewer/open';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/open/styles/index.css';

interface CustomizeOpenButtonExampleProps {
    fileUrl: string;
}

const CustomizeOpenButtonExample: React.FC<CustomizeOpenButtonExampleProps> = ({ fileUrl }) => {
    const openPluginInstance = openPlugin();
    const { Open } = openPluginInstance;

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
                <Open>
                {
                    (props: RenderOpenProps) => (
                        <div
                            style={{
                                backgroundColor: '#357edd',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#ffffff',
                                cursor: 'pointer',
                                padding: '8px',
                                position: 'relative',
                            }}
                        >
                            <input
                                type='file'
                                onChange={e => props.onClick(e)}
                                style={{
                                    bottom: 0,
                                    cursor: 'pointer',
                                    height: '100%',
                                    left: 0,
                                    opacity: 0,
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    width: '100%',
                                }}
                            />
                            Open file
                        </div>
                    )
                }
                </Open>
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

export default CustomizeOpenButtonExample;