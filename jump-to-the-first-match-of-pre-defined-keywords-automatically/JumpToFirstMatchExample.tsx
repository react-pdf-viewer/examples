import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import type { SingleKeyword } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface JumpToFirstMatchExampleProps {
    fileUrl: string;
    keyword: SingleKeyword | SingleKeyword[];
}

const JumpToFirstMatchExample: React.FC<JumpToFirstMatchExampleProps> = ({ fileUrl, keyword }) => {
    const [isDocumentLoaded, setDocumentLoaded] = React.useState(false);
    const handleDocumentLoad = () => setDocumentLoaded(true);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const { toolbarPluginInstance } = defaultLayoutPluginInstance;
    const { searchPluginInstance } = toolbarPluginInstance;
    const { highlight } = searchPluginInstance;

    React.useEffect(() => {
        if (isDocumentLoaded) {
            highlight(keyword);
        }
    }, [isDocumentLoaded]);

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} onDocumentLoad={handleDocumentLoad} />;
};

export default JumpToFirstMatchExample;
