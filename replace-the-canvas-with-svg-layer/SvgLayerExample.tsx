import React from 'react';
import { RenderPageProps, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface SvgLayerExampleProps {
    fileUrl: string;
}

const SvgLayerExample: React.FC<SvgLayerExampleProps> = ({ fileUrl }) => {
    const renderPage = (props: RenderPageProps) => {
        return (
            <>
                {props.svgLayer.children}
                {props.textLayer.children}
                {props.annotationLayer.children}
            </>
        );
    };

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
            <Viewer
                fileUrl={fileUrl}
                renderPage={renderPage}
            />
        </div>
    );
};

export default SvgLayerExample;
