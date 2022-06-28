import { Viewer } from '@react-pdf-viewer/core';
import { printPlugin } from '@react-pdf-viewer/print';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';

interface PrintDocumentExampleProps {
    fileUrl: string;
}

const PrintDocumentExample: React.FC<PrintDocumentExampleProps> = ({ fileUrl }) => {
    const printPluginInstance = printPlugin();
    const { print } = printPluginInstance;

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
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    padding: '0.25rem',
                }}
            >
                <button
                    style={{
                        backgroundColor: '#357edd',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                    onClick={print}
                >
                    Print
                </button>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[printPluginInstance]} />
            </div>
        </div>
    );
};

export default PrintDocumentExample;
