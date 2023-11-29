import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./ComponentsCss/Search.css"
const Search = (props) => {
    const [artist, setArtist] = useState("")
    return (
        <header className="app-header">
            <div className="name-app">
                <h1 onClick={() => { props.view("All Galleries") }}><a href="#">Artistic Aura</a> </h1>
                <button className="new-gallery" onClick={() => { props.view("NewPost") }}> <IoIosAddCircleOutline className="btn-add" /> Add New Piece</button>
                <nav className="app-navigation">
                    <ul className="nav">
                        <li><a>

                            <input type="text"
                                placeholder="Find Your Artist"
                                className="Search-bar"
                                defaultValue={artist}
                                onChange={(e) => setArtist(e.target.value)}
                            />
                            <button className="btn-search" onClick={() => {
                                props.getArtist(artist)
                                props.view("OneGallerie")
                            }}>Search</button>

                        </a>
                        </li>
                    </ul>
                </nav>
                {/* <h5 onClick={()=>props.view("All Galleries")}>Pieces</h5> */}
            </div>
            <div>

            </div>

        </header>
    )
}

export default Search