import React from "react";

const Pagination = (props) => {
    return(
        <div className="d-flex justify-content-center p-2">
            <button onClick={props.previousPage} type="button" className="btn btn-lg btn-success m-3">Anterior &larr;</button>
            <button onClick={props.nextPage} type="button" className="btn btn-lg btn-success m-3">siguiente &rarr;</button>
        </div>
    );
}

export default Pagination;