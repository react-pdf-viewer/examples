import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/default-layout/styles/index.css';

interface DefaultLayoutExampleProps {
    fileUrl: string;
}

const DefaultLayoutExample: React.FC<DefaultLayoutExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Viewer
                fileUrl={fileUrl}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    );
};

export default DefaultLayoutExample;