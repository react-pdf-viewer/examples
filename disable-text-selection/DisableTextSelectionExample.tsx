import * as React from 'react';
import { Viewer, RenderPageProps } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface DisableTextSelectionExampleProps {
    fileUrl: string;
}

const DisableTextSelectionExample: React.FC<DisableTextSelectionExampleProps> = ({ fileUrl }) => {
    const renderPage = (props: RenderPageProps) => {
        return (
            <>
                {props.canvasLayer.children}
                <div style={{ userSelect: 'none' }}>
                    {props.textLayer.children}
                </div>
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

export default DisableTextSelectionExample;
