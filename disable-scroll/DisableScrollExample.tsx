import React from 'react';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';

interface DisableScrollExampleProps {
    fileUrl: string;
}

const DisableScrollExample: React.FC<DisableScrollExampleProps> = ({ fileUrl }) => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Viewer
                fileUrl={fileUrl}
                defaultScale={SpecialZoomLevel.PageFit}
            />
        </div>
    );
};

export default DisableScrollExample;
