import React, { useState, useEffect, useRef } from 'react';
import { usePdf } from 'react-pdf-js';
import { Spinner, Row, ButtonToolbar, Button } from "react-bootstrap";

const PdfViewer = (props) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);

    const onDocumentComplete = () => {

    }

    const renderPagination = (page, pages) => {
        if (!pages) {
            return null;
        }
        let previousButton = <Button onClick={() => setPage(page - 1)} variant="link">Previous</Button>;
        if (page === 1) {
            previousButton = <Button onClick={() => setPage(page - 1)} variant="link" disabled>Previous</Button>;
        }
        let nextButton = <Button onClick={() => setPage(page + 1)} variant="link">Next</Button>;
        if (page === pages) {
            nextButton = <Button onClick={() => setPage(page + 1)} variant="link" disabled>Next</Button>;
        }
        return (

            <Row>
                <ButtonToolbar>
                    {previousButton}
                    {nextButton}
                </ButtonToolbar>
            </Row>
        );
    }

    const canvasEl = useRef(null);

    const [loading, numPages] = usePdf({
        file: props.file,
        onDocumentComplete,
        page,
        canvasEl
    });

    useEffect(() => {
        setPages(numPages);
    }, [numPages]);

    return (
        <Row className="justify-content-md-center">
            {loading && <Spinner animation="grow" />}
            <canvas ref={canvasEl} />
            {renderPagination(page, pages)}
        </Row>
    );
}

export default PdfViewer;
