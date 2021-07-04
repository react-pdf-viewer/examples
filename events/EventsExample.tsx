import * as React from 'react';
import { DocumentLoadEvent, Viewer, ZoomEvent } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface EventsExampleProps {
    fileUrl: string;
}

const EventsExample: React.FC<EventsExampleProps> = ({ fileUrl }) => {
    const handleDocumentLoad = (e: DocumentLoadEvent) => {
        console.log(`Document is loaded. Number of pages: ${e.doc.numPages}`);
    };

    const handleZoom = (e: ZoomEvent) => {
        console.log(`Zoom to ${e.scale}`);
    };

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
            }}
        >
            <Viewer fileUrl={fileUrl} onDocumentLoad={handleDocumentLoad} onZoom={handleZoom} />
        </div>
    );
};

export default EventsExample;
