import * as React from 'react';
import { RenderSearchProps, SearchPlugin } from '@react-pdf-viewer/search';
import { SearchSidebarInner } from './SearchSidebarInner';

interface SearchSidebarProps {
    isDocumentLoaded: boolean;
    searchPluginInstance: SearchPlugin;
}

export const SearchSidebar: React.FC<SearchSidebarProps> = ({ isDocumentLoaded, searchPluginInstance }) => {
    const { Search } = searchPluginInstance;

    return (
        <Search>
            {(renderSearchProps: RenderSearchProps) => (
                <SearchSidebarInner isDocumentLoaded={isDocumentLoaded} renderSearchProps={renderSearchProps} />
            )}
        </Search>
    );
};
