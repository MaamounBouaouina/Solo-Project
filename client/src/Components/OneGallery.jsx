import React, { useEffect, useState } from "react";
import "./ComponentsCss/OneGallery.css"
import NewDescription from "./NewDescription.jsx";
import axios from "axios";
const OneGallery = (props) => {
    // console.log(props);
    const [gallery, setGallery] = useState(props.gallery)
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)

    useEffect(() => {
        fetch(gallery.artist)
    }, [updateView])
    function fetch(artist) {
        axios.get(`http://localhost:8080/${artist}`).then((response) => {
            // console.log(response.data, "testettetetet");
            setGallery(response.data)
        })
    }

    return (
        <div>
            <div>
                <button className="btn-delete" onClick={() => {
                    props.removeGallery(gallery._id)
                    props.refresh("All Galleries")
                }}> Delete </button>
                <div className="painting-nameOne">
                    Piece:
                    <h1 className="nameOfPaint">  {gallery.painting}</h1>
                </div>

                <div className="Painter-name"> Painter:
                </div>
                <div
                    className="artist-nameOne"> {gallery.artist}</div>
                <div className="First_Img">
                    <div className="frameone">
                        <div className="borderOne">
                            <div className="painting-Oneimg">
                                <img src={gallery.image_url} alt="Not Found" height="350" width="250" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="date-paint">-{gallery.date}-</div>
                <div className="desc-paint">
                    <p onClick={() => {

                        setUpdateView(!updateView)
                    }}>{gallery.description}</p>
                </div>
                {updateView && <NewDescription updateDesc={props.updateDesc} id={gallery._id} setUpdateView={setUpdateView} description={gallery.description} />}
                <div className="Mesuem-location">
                    Mesuem:
                </div>
                <div className="museum-paint" onClick={() => { setView(!view) }}>  {gallery.museum} </div>

                {view && <div className="Second-img">
                    <div className="frameone">
                        <div className="borderOne">
                            <div className="paint in meseum">
                                <img src={gallery.mus_img} alt="Not Found" height="350" width="250" /></div>
                        </div>
                    </div>
                </div>}
            </div>


            {/* {props.data.map((paint) => {
                return (
                    <div>
                        <button onClick={() => {
                            props.removeGallery(paint._id)
                            props.refresh("All Galleries")
                        }}> Delete </button>
                        <div className="painting-name">
                            {paint.painting}
                        </div>
                        <div className="artist-name">{paint.artist}</div>
                        <div className="painting-img">
                            <img src={paint.image_url} alt="Not Found" className="painting-img" />
                        </div>
                        <div className="date-paint">{paint.date}</div>
                        <div className="desc-paint" onClick={() => {
                            console.log(view);
                            setUpdateView(!updateView)
                        }}>{paint.description}</div>
                        {updateView && <NewDescription updateDesc={props.updateDesc} id={paint._id} setUpdateView={setUpdateView} description={paint.description} />}
                        <div className="museum-paint" onClick={() => { setView(!view) }}>{paint.museum}</div>
                        {view && <div className="paint in meseum">
                            <img src={paint.mus_img} alt="Not Found" className="paint in meseum" /></div>}
                    </div>

                )
            })} */}
        </div>
    )
}

export default OneGallery