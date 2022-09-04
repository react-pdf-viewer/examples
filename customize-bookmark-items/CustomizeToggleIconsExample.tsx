import type { RenderBookmarkItemProps } from '@react-pdf-viewer/bookmark';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { Icon, Viewer } from '@react-pdf-viewer/core';
import * as React from 'react';

import '@react-pdf-viewer/bookmark/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface CustomizeToggleIconsExampleProps {
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

const CustomizeToggleIconsExample: React.FC<CustomizeToggleIconsExampleProps> = ({ fileUrl }) => {
    const bookmarkPluginInstance = bookmarkPlugin();

    const { Bookmarks } = bookmarkPluginInstance;

    const renderBookmarkItem = (renderProps: RenderBookmarkItemProps) =>
        renderProps.defaultRenderItem(
            renderProps.onClickItem,
            <>
                {renderProps.defaultRenderToggle(<ExpandIcon />, <CollapseIcon />)}
                {renderProps.defaultRenderTitle(renderProps.onClickTitle)}
            </>
        );

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                height: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                    overflow: 'auto',
                    width: '30%',
                }}
            >
                <Bookmarks renderBookmarkItem={renderBookmarkItem} />
            </div>
            <div style={{ flex: 1 }}>
                <Viewer fileUrl={fileUrl} plugins={[bookmarkPluginInstance]} />
            </div>
        </div>
    );
};

export default CustomizeToggleIconsExample;
