import React, { ReactElement } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/default-layout/styles/index.css';

const RenderToolbarExample: React.FC<{}> = () => {
    const renderToolbar = (Toolbar: ((props: ToolbarProps) => ReactElement)) => (
        <>
            <Toolbar />
            <div
                style={{
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    marginTop: '4px',
                    padding: '4px',
                }}
            >
                Custom element
            </div>
        </>
    );

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Viewer
                fileUrl='/assets/pdf-open-parameters.pdf'
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    );
};

export default RenderToolbarExample;