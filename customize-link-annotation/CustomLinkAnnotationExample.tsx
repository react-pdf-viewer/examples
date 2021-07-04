import * as React from 'react';
import { AnnotationType, Plugin, PluginOnAnnotationLayerRender, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomLinkAnnotationExampleProps {
    fileUrl: string;
}

const customAnnotationPlugin = (): Plugin => {
    const onAnnotationLayerRender = (e: PluginOnAnnotationLayerRender) => {
        // Find all `Link` annotation
        e.annotations
            .filter((annotation) => annotation.annotationType === AnnotationType.Link)
            .forEach((annotation) => {
                if (annotation.url) {
                    // Find the `a` element represents the link
                    [...e.container.querySelectorAll('.rpv-core-annotation-link a')].forEach((linkEle) => {
                        linkEle.setAttribute('target', '_blank');
                    });
                }
            });
    };

    return {
        onAnnotationLayerRender,
    };
};

const CustomLinkAnnotationExample: React.FC<CustomLinkAnnotationExampleProps> = ({ fileUrl }) => {
    const customAnnotationPluginInstance = customAnnotationPlugin();

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
            }}
        >
            <Viewer fileUrl={fileUrl} plugins={[customAnnotationPluginInstance]} />
        </div>
    );
};

export default CustomLinkAnnotationExample;
