import * as React from 'react';
import ViewerWrapper from './ViewerWrapper';

const MultipleViewersSamePageExample = () => {
    return (
        <div>
            <ViewerWrapper fileUrl="/path/to/document.pdf" />
            <ViewerWrapper fileUrl="/path/to/other-document.pdf" />
        </div>
    );
};

export default MultipleViewersSamePageExample;
