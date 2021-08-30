import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

import { pageThumbnailPlugin } from './pageThumbnailPlugin';

interface DisplayThumbnailExampleProps {
    fileUrl: string;
    pageIndex: number;
}

const DisplayThumbnailExample: React.FC<DisplayThumbnailExampleProps> = ({ fileUrl, pageIndex }) => {
    const pageThumbnailPluginInstance = pageThumbnailPlugin({
        pageIndex,
    });

    return <Viewer fileUrl={fileUrl} plugins={[pageThumbnailPluginInstance]} />;
};

export default DisplayThumbnailExample;
