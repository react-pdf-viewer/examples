import type { DocumentLoadEvent } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import type { FlagKeyword } from '@react-pdf-viewer/search';
import { searchPlugin } from '@react-pdf-viewer/search';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

import { SearchSidebar } from './SearchSidebar';

interface SearchSidebarInitialKeywordExampleProps {
    fileUrl: string;
    keyword?: FlagKeyword;
}

const SearchSidebarInitialKeywordExample: React.FC<SearchSidebarInitialKeywordExampleProps> = ({
    fileUrl,
    keyword,
}) => {
    const searchPluginInstance = searchPlugin({
        keyword,
    });
    const [isDocumentLoaded, setDocumentLoaded] = React.useState(false);

    const handleDocumentLoad = (e: DocumentLoadEvent) => {
        setDocumentLoaded(true);
    };

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, .3)',
                display: 'flex',
                height: '100%',
                width: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, .2)',
                    flex: '0 0 15rem',
                    width: '15rem',
                }}
            >
                <SearchSidebar isDocumentLoaded={isDocumentLoaded} searchPluginInstance={searchPluginInstance} />
            </div>

            <div style={{ flex: 1 }}>
                <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance]} onDocumentLoad={handleDocumentLoad} />
            </div>
        </div>
    );
};

export default SearchSidebarInitialKeywordExample;
