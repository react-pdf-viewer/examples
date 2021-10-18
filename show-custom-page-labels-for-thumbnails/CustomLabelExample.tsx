import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import type { RenderCurrentPageLabel, RenderCurrentPageLabelProps } from '@react-pdf-viewer/thumbnail';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';

interface CustomLabelExampleProps {
    fileUrl: string;
}

const CustomLabelExample: React.FC<CustomLabelExampleProps> = ({ fileUrl }) => {
    const renderCurrentPageLabel: RenderCurrentPageLabel = (props: RenderCurrentPageLabelProps) => (
        <>
            {props.pageIndex + 1}
            {props.pageLabel !== `${props.pageIndex + 1}` && `(${props.pageLabel})`}
        </>
    );

    const thumbnailPluginInstance = thumbnailPlugin({
        renderCurrentPageLabel,
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

export default CustomLabelExample;
