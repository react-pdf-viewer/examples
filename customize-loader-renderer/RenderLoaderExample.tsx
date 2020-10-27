import React from 'react';
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
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
            }}
        >
            <Viewer
                fileUrl={fileUrl}
                renderLoader={renderLoader}
            />
        </div>
    );
};

export default RenderLoaderExample;
