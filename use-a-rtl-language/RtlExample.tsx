import * as React from 'react';
import { LocalizationMap, TextDirection, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import ar_AE from '@react-pdf-viewer/locales/lib/ar_AE.json';

interface RtlExampleProps {
    fileUrl: string;
}

const RtlExample: React.FC<RtlExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Viewer
            fileUrl={fileUrl}
            localization={ar_AE as unknown as LocalizationMap}
            plugins={[defaultLayoutPluginInstance]}
            theme={{
                direction: TextDirection.RightToLeft,
            }}
        />
    );
};

export default RtlExample;
