import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { printPlugin, RenderPrintProps } from '@react-pdf-viewer/print';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';

interface CustomizePrintButtonExampleProps {
    fileUrl: string;
}

const CustomizePrintButtonExample: React.FC<CustomizePrintButtonExampleProps> = ({ fileUrl }) => {
    const printPluginInstance = printPlugin();
    const { Print } = printPluginInstance;

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
                <Print>
                {
                    (props: RenderPrintProps) => (
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
                            Print
                        </button>
                    )
                }
                </Print>
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

export default CustomizePrintButtonExample;