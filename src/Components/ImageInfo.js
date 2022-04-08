import React from "react";
import { Button } from "react-bootstrap";

const ImageInfo = props => {
    return(
        <div className="d-flex justify-content-center">
            <Button 
                    className="btn btn-primary btn-block"
                    onClick={() => props.handleImageUrl(props.imageUrl)}
            > 
                Analyze Image
            </Button>
        </div>
    );
}

export default ImageInfo;