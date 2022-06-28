import { Button, Spinner, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomizeProgressBarDefaultLayoutExampleProps {
    fileUrl: string;
}

const CustomizeProgressBarDefaultLayoutExample: React.FC<CustomizeProgressBarDefaultLayoutExampleProps> = ({
    fileUrl,
}) => {
    const renderProgressBar = React.useCallback(
        (numLoadedPages: number, numPages: number, onCancel: () => void) => (
            <div
                style={{
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, .5)',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 9999,
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1.5rem',
                        width: '20rem',
                    }}
                >
                    <div style={{ marginBottom: '1rem' }}>
                        Preparing {numLoadedPages}/{numPages} pages ...
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <Spinner />
                    </div>
                    <Button onClick={onCancel}>Cancel</Button>
                </div>
            </div>
        ),
        []
    );

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            printPlugin: {
                renderProgressBar,
            },
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default CustomizeProgressBarDefaultLayoutExample;
