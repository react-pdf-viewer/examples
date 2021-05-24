import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { RenderSwitchSelectionModeProps, SelectionMode, selectionModePlugin } from '@react-pdf-viewer/selection-mode';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/selection-mode/lib/styles/index.css';

interface CustomSwitchModeButtonsExampleProps {
    fileUrl: string;
}

const CustomSwitchModeButtonsExample: React.FC<CustomSwitchModeButtonsExampleProps> = ({ fileUrl }) => {
    const selectionModePluginInstance = selectionModePlugin();
    const { SwitchSelectionMode } = selectionModePluginInstance;

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
                    <SwitchSelectionMode mode={SelectionMode.Hand}>
                    {
                        (props: RenderSwitchSelectionModeProps) => (
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
                                Hand tool
                            </button>
                        )
                    }
                    </SwitchSelectionMode>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <SwitchSelectionMode mode={SelectionMode.Text}>
                    {
                        (props: RenderSwitchSelectionModeProps) => (
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
                                Text selection tool
                            </button>
                        )
                    }
                    </SwitchSelectionMode>
                </div>
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
                        selectionModePluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomSwitchModeButtonsExample;