import React from "react";
import { Button } from "react-bootstrap";

const ImageInfo = props => {
    return(
        <div className="d-flex justify-content-center">
            <Button 
                    // href="#"
                    // target={props.target}
                    className="btn btn-primary btn-block"
                    // onClick={props.handleImageUrl(props.href)}
                    onClick={() => props.handleImageUrl(props.target)}
            > 
                Analyze Image
            </Button>
        </div>
    );
}

export default ImageInfo;