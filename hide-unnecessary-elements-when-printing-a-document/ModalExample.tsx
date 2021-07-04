import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Viewer } from '@react-pdf-viewer/core';
import { printPlugin, RenderPrintProps } from '@react-pdf-viewer/print';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';

import './modalExample.css';

interface ModalExampleProps {
    fileUrl: string;
}

const ModalExample: React.FC<ModalExampleProps> = ({ fileUrl }) => {
    const [shown, setShown] = useState(false);

    const printPluginInstance = printPlugin();
    const { Print } = printPluginInstance;

    const modalBody = () => (
        <div
            className="example-modal"
            style={{
                backgroundColor: '#fff',
                flexDirection: 'column',
                overflow: 'hidden',

                /* Fixed position */
                left: 0,
                position: 'fixed',
                top: 0,

                /* Take full size */
                height: '100%',
                width: '100%',

                /* Displayed on top of other elements */
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    padding: '.5rem',
                }}
            >
                <div style={{ marginRight: 'auto' }}>sample-file-name.pdf</div>
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
                            Print
                        </button>
                    )}
                </Print>
                <button
                    style={{
                        backgroundColor: '#357edd',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        marginLeft: '12px',
                        padding: '8px',
                    }}
                    onClick={() => setShown(false)}
                >
                    Close
                </button>
            </div>
            <div
                style={{
                    flexGrow: 1,
                    overflow: 'auto',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[printPluginInstance]} />
            </div>
        </div>
    );

    return (
        <>
            <button
                style={{
                    backgroundColor: '#00449e',
                    border: 'none',
                    borderRadius: '.25rem',
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '.5rem',
                }}
                onClick={() => setShown(true)}
            >
                Open modal
            </button>
            {shown && ReactDOM.createPortal(modalBody(), document.body)}
        </>
    );
};

export default ModalExample;
