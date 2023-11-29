import React, { useState } from "react";

const NewDescription = (props) => {
    const [newDesc, setNewDesc] = useState("")
    return (
        <div className="description-box">
            <textarea type="text"
                placeholder={props.description}
                className="newDescription"
                required
                onChange={(e) => setNewDesc(e.target.value)}
            />
            <button className="btn-done-newDescription" onClick={() => { props.updateDesc(newDesc, props.id) 
            props.setUpdateView(false)}}>Done</button>
        </div>
    )
}

export default NewDescription