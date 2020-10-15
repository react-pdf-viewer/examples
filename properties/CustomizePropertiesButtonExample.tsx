import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { propertiesPlugin, RenderShowPropertiesProps } from '@react-pdf-viewer/properties';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/properties/styles/index.css';

interface CustomizePropertiesButtonExampleProps {
    fileUrl: string;
}

const CustomizePropertiesButtonExample: React.FC<CustomizePropertiesButtonExampleProps> = ({ fileUrl }) => {
    const propertiesPluginInstance = propertiesPlugin();
    const { ShowProperties } = propertiesPluginInstance;

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
                <ShowProperties>
                {
                    (props: RenderShowPropertiesProps) => (
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
                            Properties
                        </button>
                    )
                }
                </ShowProperties>
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
                        propertiesPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizePropertiesButtonExample;
