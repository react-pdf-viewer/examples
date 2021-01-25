import * as React from 'react';
import { Store } from '@react-pdf-viewer/core';

import StoreProps from './StoreProps';

const Tracker: React.FC<{
    store: Store<StoreProps>,
}> = ({ store }) => {
    const handlePagesContainer = (getPagesContainer: () => HTMLElement) => {
        const pagesEle = getPagesContainer();
        if (pagesEle) {
            // Disable scroll in the container of pages
            pagesEle.style.overflow = 'hidden';
        }
    };

    React.useEffect(() => {
        store.subscribe('getPagesContainer', handlePagesContainer);

        return (): void => {
            store.unsubscribe('getPagesContainer', handlePagesContainer);
        };
    }, []);

    return <></>;
};

export default Tracker;
