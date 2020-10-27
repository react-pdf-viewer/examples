import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { SelectionMode, selectionModePlugin } from '@react-pdf-viewer/selection-mode';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/selection-mode/lib/styles/index.css';

interface SwitchSelectionModeButtonsExampleProps {
    fileUrl: string;
}

const SwitchSelectionModeButtonsExample: React.FC<SwitchSelectionModeButtonsExampleProps> = ({ fileUrl }) => {
    const selectionModePluginInstance = selectionModePlugin();
    const { SwitchSelectionModeButton } = selectionModePluginInstance;

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
                    <SwitchSelectionModeButton mode={SelectionMode.Hand} />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <SwitchSelectionModeButton mode={SelectionMode.Text} />
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

export default SwitchSelectionModeButtonsExample;