import * as React from 'react';
import { createStore, Plugin, PluginFunctions, RenderViewer } from '@react-pdf-viewer/core';

import StoreProps from './StoreProps';
import Tracker from './Tracker';

const disableScrollPlugin = (): Plugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    const renderViewer = (props: RenderViewer) => {
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
        },
        renderViewer,
    };
};

export default disableScrollPlugin;
