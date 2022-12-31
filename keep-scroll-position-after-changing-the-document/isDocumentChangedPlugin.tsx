import * as React from 'react';
import type { DocumentLoadEvent, Plugin } from '@react-pdf-viewer/core';

interface DocumentChangedPlugin extends Plugin {
    isDocumentChanged: boolean;
}

export const isDocumentChangedPlugin = (): DocumentChangedPlugin => {
    const currentDocumentRef = React.useRef('');
    const [isDocumentChanged, setDocumentChanged] = React.useState(false);

    const handleDocumentLoad = (e: DocumentLoadEvent) => {
        const docId = e.doc.loadingTask.docId;
        if (currentDocumentRef.current !== '' && currentDocumentRef.current !== docId) {
            setDocumentChanged(true);
        }
        currentDocumentRef.current = docId;
    };

    return {
        onDocumentLoad: handleDocumentLoad,
        isDocumentChanged,
    };
};
