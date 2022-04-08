import React from "react";

const ImageInfo = props => {
    return(
        <div className="d-flex justify-content-center">
            <a 
                    //href={props.href} 
                    target={props.target}
                    className="btn btn-primary btn-block"
                    // onClick={props.handleImageUrl(props.href)}
                    onClick={(value) => props.handleImageUrl(value.target.target)}
            > 
                Analyze Image
            </a>
        </div>
    );
}

export default ImageInfo;