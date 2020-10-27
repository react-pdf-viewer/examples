import React from 'react';
import { LocalizationMap, LocalizationProvider, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import vi_VN from './vi_VN.json';

interface LocalizationExampleProps {
    fileUrl: string;
}

const LocalizationExample: React.FC<LocalizationExampleProps> = ({ fileUrl }) => {
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    return (
        <LocalizationProvider localization={(vi_VN as any) as LocalizationMap}>
        {
            (_) => (
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
                        <Toolbar />
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
                                toolbarPluginInstance,
                            ]}
                        />
                    </div>
                </div>
            )
        }   
        </LocalizationProvider>
    );
};

export default LocalizationExample;
