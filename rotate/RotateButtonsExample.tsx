import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { rotatePlugin } from '@react-pdf-viewer/rotate';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface RotateButtonsExampleProps {
    fileUrl: string;
}

const RotateButtonsExample: React.FC<RotateButtonsExampleProps> = ({ fileUrl }) => {
    const rotatePluginInstance = rotatePlugin();
    const { RotateBackwardButton, RotateForwardButton } = rotatePluginInstance;

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
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <RotateBackwardButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <RotateForwardButton />
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

export default RotateButtonsExample;
