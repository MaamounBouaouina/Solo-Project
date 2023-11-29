import React from "react";
import Galleries from "./Galleries";
const ListGallery=(props)=>{
    // console.log(props);
    return(
        <div className="Container">
                {props.data.map((paint)=>{
                    return(<Galleries data={paint} key={paint._id} setView={props.setView} oneGallery={props.oneGallery}/>)
                })}
        </div>
    )
}

export default ListGallery