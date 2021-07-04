import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import readingIndicatorPlugin from './readingIndicatorPlugin';

interface ReadingProgressExampleProps {
    fileUrl: string;
}

const ReadingProgressExample: React.FC<ReadingProgressExampleProps> = ({ fileUrl }) => {
    const readingIndicatorPluginInstance = readingIndicatorPlugin();
    const { ReadingIndicator } = readingIndicatorPluginInstance;

    const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
        <>
            <Toolbar />
            <div style={{ margin: '4px -4px -4px -4px' }}>
                <ReadingIndicator />
            </div>
        </>
    );

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance, readingIndicatorPluginInstance]} />;
};

export default ReadingProgressExample;
