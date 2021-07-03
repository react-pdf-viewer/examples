import * as React from 'react';
import { ProgressBar, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface RenderLoaderExampleProps {
    fileUrl: string;
}

const RenderLoaderExample: React.FC<RenderLoaderExampleProps> = ({ fileUrl }) => {
    const renderLoader = (percentages: number) => (
        <div style={{ width: '240px' }}>
            <ProgressBar progress={Math.round(percentages)} />
        </div>
    );

    return (
        <Viewer
            fileUrl={fileUrl}
            renderLoader={renderLoader}
        />
    );
};

export default RenderLoaderExample;
