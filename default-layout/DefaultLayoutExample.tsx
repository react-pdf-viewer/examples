import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface DefaultLayoutExampleProps {
    fileUrl: string;
}

const DefaultLayoutExample: React.FC<DefaultLayoutExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Viewer
            fileUrl={fileUrl}
            plugins={[
                defaultLayoutPluginInstance,
            ]}
        />
    );
};

export default DefaultLayoutExample;