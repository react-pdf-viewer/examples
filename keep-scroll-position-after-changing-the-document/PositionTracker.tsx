import type { Store } from '@react-pdf-viewer/core';
import * as React from 'react';
import type { StoreProps } from './StoreProps';

const SCROLL_EVENT_OPTIONS = {
    capture: false,
    passive: true,
};

export const PositionTracker: React.FC<{
    isDocumentChanged: boolean;
    store: Store<StoreProps>;
}> = ({ isDocumentChanged, store }) => {
    const scrollToLatestPosition = () => {
        const latestOffset = store.get('offset');
        const getPagesContainer = store.get('getPagesContainer');
        if (!getPagesContainer || !latestOffset) {
            return;
        }
        const pagesEle = getPagesContainer();
        if (pagesEle) {
            pagesEle.scrollTop = latestOffset.top;
            pagesEle.scrollLeft = latestOffset.left;
        }
    };

    const handleScroll = (e: Event) => {
        // We will implement in later
        const target = e.target;
        if (target instanceof HTMLDivElement) {
            const top = target.scrollTop;
            const left = target.scrollLeft;
            store.update('offset', { top, left });
        }
    };

    const handlePagesContainer = () => {
        const getPagesContainer = store.get('getPagesContainer');
        if (!getPagesContainer) {
            return;
        }

        const pagesEle = getPagesContainer();
        pagesEle.addEventListener('scroll', handleScroll, SCROLL_EVENT_OPTIONS);
    };

    React.useLayoutEffect(() => {
        if (isDocumentChanged) {
            scrollToLatestPosition();
        }
    }, [isDocumentChanged]);

    React.useLayoutEffect(() => {
        store.subscribe('getPagesContainer', handlePagesContainer);

        return () => {
            store.unsubscribe('getPagesContainer', handlePagesContainer);
        };
    }, []);

    return <></>;
};
