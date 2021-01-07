import * as React from 'react';
import { createStore, Plugin, PluginFunctions, RenderViewer, Slot } from '@react-pdf-viewer/core';

import StoreProps from './StoreProps';
import Tracker from './Tracker';

const zoomAfterFullScreen = (): Plugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    const renderViewer = (props: RenderViewer): Slot => {
        const { slot } = props;
        slot.children = (
            <>
            <Tracker store={store} />
            {slot.children}
            </>
        );
        return slot;
    };

    return {
        install: (pluginFunctions: PluginFunctions) => {
            store.update('getPagesContainer', pluginFunctions.getPagesContainer);
            store.update('zoom', pluginFunctions.zoom);
        },
        renderViewer,
    };
};

export default zoomAfterFullScreen;
