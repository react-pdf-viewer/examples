import * as React from 'react';
import { createStore, Plugin, PluginFunctions } from '@react-pdf-viewer/core';

import ReadingIndicator from './ReadingIndicator';
import StoreProps from './StoreProps';

interface ReadingIndicatorPlugin extends Plugin {
    ReadingIndicator: () => React.ReactElement;
}

const readingIndicatorPlugin = (): ReadingIndicatorPlugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    const ReadingIndicatorDecorator = () => <ReadingIndicator store={store} />;

    return {
        install: (pluginFunctions: PluginFunctions) => {
            store.update('getPagesContainer', pluginFunctions.getPagesContainer);
        },
        ReadingIndicator: ReadingIndicatorDecorator,
    };
};

export default readingIndicatorPlugin;
