import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { printPlugin } from '@react-pdf-viewer/print';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';

interface PrintButtonExampleProps {
    fileUrl: string;
}

const PrintButtonExample: React.FC<PrintButtonExampleProps> = ({ fileUrl }) => {
    const printPluginInstance = printPlugin();
    const { PrintButton } = printPluginInstance;

    return (
        <div
            className='rpv-core__viewer'
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
                <PrintButton />
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
                        printPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default PrintButtonExample;