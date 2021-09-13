import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import type { DocumentAskPasswordEvent } from '@react-pdf-viewer/core';

interface SubmitPasswordExampleProps {
    fileUrl: string;
}

const SubmitPasswordExample: React.FC<SubmitPasswordExampleProps> = ({ fileUrl }) => {
    const handleAskPassword = (e: DocumentAskPasswordEvent) => {
        e.verifyPassword('The password goes here');
    };

    return <Viewer fileUrl={fileUrl} onDocumentAskPassword={handleAskPassword} />;
};

export default SubmitPasswordExample;
