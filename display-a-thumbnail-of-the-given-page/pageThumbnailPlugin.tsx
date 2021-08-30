import * as React from 'react';
import { createStore, Plugin, PluginOnDocumentLoad, RenderViewer } from '@react-pdf-viewer/core';

import { PageThumbnail } from './PageThumbnail';
import { StoreProps } from './StoreProps';

export interface PageThumbnailPluginProps {
    pageIndex: number;
}

export const pageThumbnailPlugin = (props: PageThumbnailPluginProps): Plugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    return {
        onDocumentLoad: (e: PluginOnDocumentLoad) => {
            store.update('doc', e.doc);
        },
        renderViewer: (renderProps: RenderViewer) => {
            let { slot } = renderProps;

            slot.children = <PageThumbnail pageIndex={props.pageIndex} store={store} />;

            // Reset the sub slot
            slot.subSlot.attrs = {};
            slot.subSlot.children = <></>;

            return slot;
        },
    };
};
