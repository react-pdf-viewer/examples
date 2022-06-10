import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, setInitialTabFromPageMode } from '@react-pdf-viewer/default-layout';
import * as React from 'react';

interface SetInitialTabPageModeExampleProps {
    fileUrl: string;
}

const SetInitialTabPageModeExample: React.FC<SetInitialTabPageModeExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        setInitialTab: setInitialTabFromPageMode,
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default SetInitialTabPageModeExample;
