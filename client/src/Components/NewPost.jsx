import React, { useEffect, useState } from "react";
import "./ComponentsCss/NewPost.css"
const NewPost = (props) => {
    const [artist, setArtist] = useState("")
    const [painting, setPainting] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [image_url, setImage_url] = useState("")
    const [museum, setMuseum] = useState("")
    const [mus_img, setMus_img] = useState("")
    return (
        <div className="form-ps">
            <form>
                <input type="text"
                    className="artist-form"
                    placeholder="Artist"
                    required
                    defaultValue={artist}
                    onChange={(ev) => { setArtist(ev.target.value) }}
                />
                <input type="text"
                    className="painting-form"
                    placeholder="Painting"
                    required
                    defaultValue={painting}
                    onChange={(ev) => { setPainting(ev.target.value) }}
                />
                <textarea type="text"
                    className="description-form"
                    placeholder="Description"
                    required
                    defaultValue={description}
                    onChange={(ev) => { setDescription(ev.target.value) }}
                />
                <input type="text"
                    className="date-form"
                    placeholder="Date"
                    required
                    defaultValue={date}
                    onChange={(ev) => { setDate(ev.target.value) }}
                />
                <input type="text"
                    className="image_url-from"
                    placeholder="Painting_url"
                    required
                    defaultValue={image_url}
                    onChange={(ev) => { setImage_url(ev.target.value) }}
                />
                <input type="text"
                    className="museum-form"
                    placeholder="Meseum"
                    required
                    defaultValue={museum}
                    onChange={(ev) => { setMuseum(ev.target.value) }}
                />
                <input type="text"
                    className="mus_img-form"
                    placeholder="Painting_Meseum"
                    required
                    defaultValue={mus_img}
                    onChange={(ev) => { setMus_img(ev.target.value) }}
                />

                <button className="btn-form" onClick={() => { props.NewGallery({ artist, painting, description, date, image_url, museum, mus_img }) }}>Sumbit</button>

            </form>
        </div>
    )
}

export default NewPost