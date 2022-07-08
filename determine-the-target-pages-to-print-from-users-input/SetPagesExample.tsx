import { Button, Modal, PrimaryButton, TextBox, Toggle, Viewer } from '@react-pdf-viewer/core';
import {
    getAllPagesNumbers,
    getCustomPagesNumbers,
    getEvenPagesNumbers,
    getOddPagesNumbers,
    printPlugin,
} from '@react-pdf-viewer/print';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';

enum PrintPages {
    All,
    EvenPages,
    OddPages,
    CustomPages,
}

interface SetPagesExampleProps {
    fileUrl: string;
}

const SetPagesExample: React.FC<SetPagesExampleProps> = ({ fileUrl }) => {
    const printPluginInstance = printPlugin();
    const { print, setPages } = printPluginInstance;
    const [printPages, setPrintPages] = React.useState(PrintPages.All);
    const [customPages, setCustomPages] = React.useState('');
    const [customPagesInvalid, setCustomPagesInvalid] = React.useState(false);

    const handlePrintAllPages = () => {
        setPrintPages(PrintPages.All);
        setPages(getAllPagesNumbers);
    };

    const handlePrintEvenPages = () => {
        setPrintPages(PrintPages.EvenPages);
        setPages(getEvenPagesNumbers);
    };

    const handlePrintOddPages = () => {
        setPrintPages(PrintPages.OddPages);
        setPages(getOddPagesNumbers);
    };

    const handleSetCustomPages = (value: string) => {
        setCustomPages(value);
        if (!/^([0-9,-\s])+$/.test(value)) {
            setCustomPagesInvalid(true);
        } else {
            setCustomPagesInvalid(false);
            setPages(getCustomPagesNumbers(value));
        }
    };

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
                <Modal
                    target={(toggle: Toggle) => (
                        <Button testId="print-button" onClick={toggle}>
                            Print
                        </Button>
                    )}
                    content={(toggle: Toggle) => (
                        <div style={{ padding: '1rem' }}>
                            <div style={{ marginBottom: '0.5rem' }}>Choose pages you want to print:</div>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <label>
                                    <input
                                        checked={printPages === PrintPages.All}
                                        type="radio"
                                        name="pages"
                                        onChange={handlePrintAllPages}
                                    />
                                    <span>All</span>
                                </label>
                            </div>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <label>
                                    <input
                                        checked={printPages === PrintPages.EvenPages}
                                        type="radio"
                                        name="pages"
                                        onChange={handlePrintEvenPages}
                                    />
                                    <span>Even pages</span>
                                </label>
                            </div>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <label>
                                    <input
                                        checked={printPages === PrintPages.OddPages}
                                        type="radio"
                                        name="pages"
                                        onChange={handlePrintOddPages}
                                    />
                                    <span>Odd pages</span>
                                </label>
                            </div>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <label>
                                    <input
                                        checked={printPages === PrintPages.CustomPages}
                                        type="radio"
                                        name="pages"
                                        onChange={() => setPrintPages(PrintPages.CustomPages)}
                                    />
                                    <span>Custom pages</span>
                                </label>
                            </div>
                            <div
                                style={{
                                    display: printPages === PrintPages.CustomPages ? 'block' : 'none',
                                    marginBottom: '1rem',
                                }}
                            >
                                <TextBox
                                    value={customPages}
                                    onChange={handleSetCustomPages}
                                    placeholder="e.g, 1-5, 8, 11-13"
                                />
                                {customPagesInvalid && printPages === PrintPages.CustomPages && (
                                    <div
                                        style={{
                                            color: '#c02424',
                                            fontSize: '0.75rem',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        Invalid pages
                                    </div>
                                )}
                            </div>
                            <div
                                style={{
                                    borderTop: '1px solid rgba(0, 0, 0, .3)',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    paddingTop: '1rem',
                                }}
                            >
                                <div style={{ marginRight: '0.5rem' }}>
                                    <Button onClick={toggle}>Close</Button>
                                </div>
                                <PrimaryButton
                                    onClick={() => {
                                        toggle();
                                        print();
                                    }}
                                >
                                    Print
                                </PrimaryButton>
                            </div>
                        </div>
                    )}
                    closeOnClickOutside={false}
                    closeOnEscape={true}
                />
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
