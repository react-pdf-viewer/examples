import React from 'react';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/bookmark/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface BookmarkExampleProps {
    fileUrl: string;
}

const BookmarkExample: React.FC<BookmarkExampleProps> = ({ fileUrl }) => {
    const bookmarkPluginInstance = bookmarkPlugin();

    const { Bookmarks } = bookmarkPluginInstance;

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
                <Bookmarks />
            </div>
            <div style={{ flex: 1 }}>
                <Viewer
                    fileUrl={fileUrl}
                    plugins={[
                        bookmarkPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default BookmarkExample;