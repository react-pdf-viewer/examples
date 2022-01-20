import * as React from 'react';
import { RenderPageProps, Viewer } from '@react-pdf-viewer/core';

interface SvgLayerExampleProps {
    fileUrl: string;
}

const CustomPageLayer: React.FC<{
    renderPageProps: RenderPageProps
}> = ({ renderPageProps }) => {
    React.useEffect(() => {
        if (renderPageProps.textLayerRendered) {
            renderPageProps.markRendered(renderPageProps.pageIndex);
        }
    }, [renderPageProps.textLayerRendered]);

    return (
        <>
            {renderPageProps.svgLayer.children}
            {renderPageProps.textLayer.children}
            {renderPageProps.annotationLayer.children}
        </>
    ); 
};

const SvgLayerExample: React.FC<SvgLayerExampleProps> = ({ fileUrl }) => {
    return <Viewer fileUrl={fileUrl} renderPage={(renderPageProps) => <CustomPageLayer renderPageProps={renderPageProps} />} />;
};

export default SvgLayerExample;
