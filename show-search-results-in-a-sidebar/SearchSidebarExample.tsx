import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

import SearchSidebar from './SearchSidebar';

interface SearchSidebarExampleProps {
    fileUrl: string;
}

const SearchSidebarExample: React.FC<SearchSidebarExampleProps> = ({ fileUrl }) => {
    const searchPluginInstance = searchPlugin();

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
                }}
            >
                <SearchSidebar searchPluginInstance={searchPluginInstance} />
            </div>

            <div style={{ flex: 1 }}>
                <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance]} />
            </div>
        </div>
    );
};

export default SearchSidebarExample;
