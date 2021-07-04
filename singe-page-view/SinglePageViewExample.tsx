import * as React from 'react';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface SinglePageViewExampleProps {
    fileUrl: string;
}

const SinglePageViewExample: React.FC<SinglePageViewExampleProps> = ({ fileUrl }) => {
    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
            }}
        >
            <Viewer fileUrl={fileUrl} defaultScale={SpecialZoomLevel.PageFit} />
        </div>
    );
};

export default SinglePageViewExample;
