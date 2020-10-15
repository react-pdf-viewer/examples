import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { fullScreenPlugin, RenderEnterFullScreenProps } from '@react-pdf-viewer/full-screen';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/full-screen/styles/index.css';

interface CustomizeFullScreenButtonExampleProps {
    fileUrl: string;
}

const CustomizeFullScreenButtonExample: React.FC<CustomizeFullScreenButtonExampleProps> = ({ fileUrl }) => {
    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreen } = fullScreenPluginInstance;

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
                <EnterFullScreen>
                {
                    (props: RenderEnterFullScreenProps) => (
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
                            Enter fullscreen
                        </button>
                    )
                }
                </EnterFullScreen>
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
                        fullScreenPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizeFullScreenButtonExample;