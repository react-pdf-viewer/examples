import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';

import './square-spinner.css';

interface CustomThumbnailSpinnerExampleProps {
    fileUrl: string;
}

const CustomThumbnailSpinnerExample: React.FC<CustomThumbnailSpinnerExampleProps> = ({ fileUrl }) => {
    const thumbnailPluginInstance = thumbnailPlugin({
        renderSpinner: () => <div className="square-spinner" />,
    });
    const { Thumbnails } = thumbnailPluginInstance;

    return (
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                height: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                    overflow: 'auto',
                    width: '30%',
                }}
            >
                <Thumbnails />
            </div>
            <div style={{ flex: 1 }}>
                <Viewer fileUrl={fileUrl} plugins={[thumbnailPluginInstance]} />
            </div>
        </div>
    );
};

export default CustomThumbnailSpinnerExample;
