import * as React from 'react';
import { createStore } from '@react-pdf-viewer/core';
import type { Plugin, PluginOnAnnotationLayerRender, RenderViewer, Slot } from '@react-pdf-viewer/core';

import ConfirmationModal from './ConfirmationModal';
import StoreProps from './StoreProps';

const openLinksPlugin = (): Plugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    const handleClick = (e: Event) => {
        e.preventDefault();
        const href = (e.target as HTMLLinkElement).href;
        store.update('clickedTarget', href);
    };

    const findLinks = (e: PluginOnAnnotationLayerRender) => {
        e.container.querySelectorAll('a[data-target="external"]').forEach((link) => {
            link.addEventListener('click', handleClick);
        });
    };

    const renderViewer = (renderViewerProps: RenderViewer): Slot => {
        const currentSlot = renderViewerProps.slot;
        if (currentSlot.subSlot) {
            currentSlot.subSlot.children = (
                <>
                    <ConfirmationModal store={store} />
                    {currentSlot.subSlot.children}
                </>
            );
        }

        return currentSlot;
    };

    return {
        onAnnotationLayerRender: findLinks,
        renderViewer,
    };
};

export default openLinksPlugin;
