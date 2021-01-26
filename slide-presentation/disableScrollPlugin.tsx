import { Plugin, RenderViewer } from '@react-pdf-viewer/core';

const disableScrollPlugin = (): Plugin => {
    const renderViewer = (props: RenderViewer) => {
        const { slot } = props;

        if (slot.subSlot && slot.subSlot.attrs && slot.subSlot.attrs.style) {
            slot.subSlot.attrs.style = Object.assign({}, slot.subSlot.attrs.style, {
                // Disable scrolling in the pages container
                overflow: 'hidden',
            });
        }

        return slot;
    };

    return {
        renderViewer,
    };
};

export default disableScrollPlugin;
