import React from "react";
import "./ComponentsCss/Galleries.css"
const Galleries = (props) => {
    return (
        <div className="Galleries">
            <div class="border">
                <div className="painting-img">
                    <img src={props.data.image_url} alt="Not Found" height="350" width="250" />
                </div>
                <div className="painting-name">
                    <h3 onClick={() => {
                        props.oneGallery(props.data)
                    }}> {props.data.painting} </h3>
                </div>
            </div>
        </div>
    )
}

export default Galleries