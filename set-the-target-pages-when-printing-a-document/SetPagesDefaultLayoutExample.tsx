import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getEvenPagesNumbers } from '@react-pdf-viewer/print';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface SetPagesDefaultLayoutExampleProps {
    fileUrl: string;
}

const SetPagesDefaultLayoutExample: React.FC<SetPagesDefaultLayoutExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            printPlugin: {
                setPages: getEvenPagesNumbers,
            },
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default SetPagesDefaultLayoutExample;
