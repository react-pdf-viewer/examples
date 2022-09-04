import type { RenderBookmarkItemProps } from '@react-pdf-viewer/bookmark';
import { Icon, Viewer } from '@react-pdf-viewer/core';
import { BookmarkIcon, defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ClickBookmarkItemExampleProps {
    fileUrl: string;
}

const ExpandIcon = () => (
    <Icon size={16}>
        <path d="M.541,5.627,11.666,18.2a.5.5,0,0,0,.749,0L23.541,5.627" />
    </Icon>
);

const CollapseIcon = () => (
    <Icon size={16}>
        <path d="M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5" />
    </Icon>
);

const ClickBookmarkItemExample: React.FC<ClickBookmarkItemExampleProps> = ({ fileUrl }) => {
    const toggleBookmarkTab = () => {
        toggleTab(1);
    };

    const renderBookmarkItem = (renderProps: RenderBookmarkItemProps) =>
        renderProps.defaultRenderItem(
            renderProps.onClickItem,
            <>
                {renderProps.defaultRenderToggle(<ExpandIcon />, <CollapseIcon />)}
                {renderProps.defaultRenderTitle(() => {
                    renderProps.onClickTitle();
                    toggleBookmarkTab();
                })}
            </>
        );

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [
            defaultTabs[0],
            {
                content: <Bookmarks renderBookmarkItem={renderBookmarkItem} />,
                icon: <BookmarkIcon />,
                title: 'Bookmark',
            },
            defaultTabs[2],
        ],
    });

    const { toggleTab } = defaultLayoutPluginInstance;
    const bookmarkPluginInstance = defaultLayoutPluginInstance.bookmarkPluginInstance;
    const { Bookmarks } = bookmarkPluginInstance;

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default ClickBookmarkItemExample;
