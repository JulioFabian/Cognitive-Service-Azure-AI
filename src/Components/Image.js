import React, { useState } from "react";
import ModalAnalisys from "./ModalAnalisys";
import HomeAnalyse from "../Views/HomeAnalise";
import ImageInfo from "./ImageInfo";

const Image = (props) => {

    const {largeImageURL, likes, previewURL, tags, views } = props.image; 
    const [imageUrl, setImageUrl] = useState();
    const [modalProps, setModalProps] = useState(false);

    const closeModal = () => setModalProps(false);

    const handleImageUrl = (imgUrl) => {
        setImageUrl(imgUrl);
        setModalProps(true);
    }


    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <p className="m-2 card-text">{likes} Likes </p>
                <p className="p-2 card-text">{views} views </p>

                {/* <a 
                    href={largeImageURL} 
                    target="_blank" 
                    className="btn btn-primary btn-block"
                >
                    See Image 
                </a> */}
                <ImageInfo
                    href={largeImageURL} 
                    target={largeImageURL}
                    handleImageUrl={handleImageUrl}
                />
            </div>
            <ModalAnalisys isOpen={modalProps} onClose={closeModal} imageUrl={imageUrl}/>
        </div>
        // <div>
        //     <ModalAnalisys />
        // </div>
    )
}

export default Image;