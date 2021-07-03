import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { OnHighlightKeyword } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomHighlightedElementExampleProps {
    fileUrl: string;
}

const CustomHighlightedElementExample: React.FC<CustomHighlightedElementExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            searchPlugin: {
                keyword: ['document'],
                onHighlightKeyword: (props: OnHighlightKeyword) => {
                    props.highlightEle.style.outline = '1px dashed blue';
                    props.highlightEle.style.backgroundColor = 'rgba(0, 0, 0, .1)';
                },
            }
        }
    });

    return (
        <Viewer
            fileUrl={fileUrl}
            plugins={[
                defaultLayoutPluginInstance,
            ]}
        />
    );
};

export default CustomHighlightedElementExample;