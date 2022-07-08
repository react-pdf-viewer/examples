import { Viewer } from '@react-pdf-viewer/core';
import type { RenderPrintProps } from '@react-pdf-viewer/print';
import { getEvenPagesNumbers, printPlugin } from '@react-pdf-viewer/print';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';

interface SetPagesExampleProps {
    fileUrl: string;
}

const SetPagesExample: React.FC<SetPagesExampleProps> = ({ fileUrl }) => {
    const printPluginInstance = printPlugin({
        setPages: getEvenPagesNumbers,
    });
    const { Print } = printPluginInstance;

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
                    padding: '4px',
                }}
            >
                <Print>
                    {(props: RenderPrintProps) => (
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
                            Print even pages
                        </button>
                    )}
                </Print>
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

export default SetPagesExample;
