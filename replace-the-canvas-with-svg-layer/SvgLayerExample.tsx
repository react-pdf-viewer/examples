import * as React from 'react';
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
        <Viewer
            fileUrl={fileUrl}
            renderPage={renderPage}
        />
    );
};

export default SvgLayerExample;
