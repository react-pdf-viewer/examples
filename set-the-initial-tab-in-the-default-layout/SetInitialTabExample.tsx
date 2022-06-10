import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as React from 'react';

interface SetInitialTabExampleProps {
    fileUrl: string;
}

const SetInitialTabExample: React.FC<SetInitialTabExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        setInitialTab: () => Promise.resolve(0),
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default SetInitialTabExample;
