import type { Plugin, PluginFunctions, RenderViewer, Slot, ViewerState } from '@react-pdf-viewer/core';
import { createStore } from '@react-pdf-viewer/core';
import * as React from 'react';
import { PositionTracker } from './PositionTracker';
import type { StoreProps } from './StoreProps';

export const trackPositionPlugin = ({
    isDocumentChanged,
    updateScale,
}: {
    isDocumentChanged: boolean;
    updateScale: (scale: number) => void;
}): Plugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    const handleViewerStateChanged = (state: ViewerState) => {
        updateScale(state.scale);
        return state;
    };

    const renderViewer = (props: RenderViewer): Slot => {
        const { slot } = props;
        slot.children = (
            <>
                <PositionTracker isDocumentChanged={isDocumentChanged} store={store} />
                {slot.children}
            </>
        );

        return slot;
    };

    return {
        install: (pluginFunctions: PluginFunctions) => {
            store.update('getPagesContainer', pluginFunctions.getPagesContainer);
        },
        onViewerStateChange: handleViewerStateChanged,
        renderViewer,
    };
};
