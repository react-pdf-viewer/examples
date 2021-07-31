import * as React from 'react';
import { LocalizationMap, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import de_DE from '@react-pdf-viewer/locales/lib/de_DE.json';

interface LocalizationExampleProps {
    fileUrl: string;
}

const LocalizationExample: React.FC<LocalizationExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Viewer
            fileUrl={fileUrl}
            localization={de_DE as unknown as LocalizationMap}
            plugins={[defaultLayoutPluginInstance]}
        />
    );
};

export default LocalizationExample;
