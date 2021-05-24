import * as React from 'react';
import { PageChangeEvent, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface StoreCurrentPageExampleProps {
    fileUrl: string;
}

const StoreCurrentPageExample: React.FC<StoreCurrentPageExampleProps> = ({ fileUrl }) => {
    const handlePageChange = (e: PageChangeEvent) => {
        localStorage.setItem('current-page', `${e.currentPage}`);
    };

    const initialPage = localStorage.getItem('current-page')
        ? parseInt(localStorage.getItem('current-page'), 10)
        : 0;

    return (
        <Viewer
            fileUrl={fileUrl}
            initialPage={initialPage}
            onPageChange={handlePageChange}
        />
    );
};

export default StoreCurrentPageExample;
