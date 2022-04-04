import * as React from 'react';
import { RotateDirection, Viewer } from '@react-pdf-viewer/core';
import { RenderRotateProps, rotatePlugin } from '@react-pdf-viewer/rotate';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface CustomizeRotateButtonsExampleProps {
    fileUrl: string;
}

const CustomizeRotateButtonsExample: React.FC<CustomizeRotateButtonsExampleProps> = ({ fileUrl }) => {
    const rotatePluginInstance = rotatePlugin();
    const { Rotate } = rotatePluginInstance;

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
                    <Rotate direction={RotateDirection.Backward}>
                        {(props: RenderRotateProps) => (
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
                                Rotate backward
                            </button>
                        )}
                    </Rotate>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <Rotate direction={RotateDirection.Forward}>
                        {(props: RenderRotateProps) => (
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
                                Rotate forward
                            </button>
                        )}
                    </Rotate>
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[rotatePluginInstance]} />
            </div>
        </div>
    );
};

export default CustomizeRotateButtonsExample;
