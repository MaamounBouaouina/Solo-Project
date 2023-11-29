import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGallery from "./Components/ListGallery";
import OneGallery from "./Components/OneGallery";
import NewPost from "./Components/NewPost";
import Search from "./Components/Search";

function App() {
  const [data, setData] = useState([])
  const [view, setView] = useState("All Galleries")
  const [updated, setUpdated] = useState(false)
  const [gallery, setGallery] = useState({})


  // Getting all the data from database:
  const fetch = () => {
    axios.get(`http://localhost:8080/`).then((response) => {
      let resdata = response.data
      setData(resdata)
    }).catch(err => {
      console.log("error happen in fetch", err);
    })
  }

  useEffect(() => {
    fetch()
  }, [updated])


  // Rendering the views:
  const renderview = () => {
    if (view === "All Galleries") {
      return < ListGallery data={data} setView={setView} oneGallery={oneGallery} />
    }
    if (view === "OneGallerie") {
      return <OneGallery gallery={gallery} updateDesc={updateDesc} removeGallery={removeGallery} refresh={setView} />
    }
    if (view === "NewPost") {
      return <NewPost NewGallery={NewGallery} />
    }
  }


  // Update a description:
  const updateDesc = (description, id) => {
    axios.put(`http://localhost:8080/putDesc/${id}`, { description }).then((response) => {
      console.log(response, "Description updated");
      setUpdated(true)
      // fetch()
    }).catch((err) => {
      console.log("error happen on update in app", err);
    })
  }

  // Posting new Gallry:
  const NewGallery = (post) => {
    axios.post(`http://localhost:8080/newGallery`, post).then((response) => {
      console.log(response);
      fetch()
    }).catch((err) => {
      console.log("error happen in post in the app", err);
      setData(data)
    })
  }


  // Remove gallery:
  const removeGallery = (id) => {
    axios.delete(`http://localhost:8080/remGallery/${id}`).then((response) => {
      console.log(response);
      fetch()
    }).catch((err) => {
      console.log("error happen in delete in app", err);
    })
  }


  // Get One artist:
  const getArtist = (artist) => {
    axios.get(`http://localhost:8080/${artist}`).then((response) => {
      // console.log([response.data]);
      setData([response.data])
    }).catch((err) => {
      console.log("error happen in getArtist in the app", err);
    })
  }


  // Set one gallery on click:
  const oneGallery = (gallery) => {
    setGallery(gallery)
    setView("OneGallerie")
  }



  return (<>
    <div>
      <Search view={setView} getArtist={getArtist} />
    {renderview()}
    </div>
  </>);
}

export default App;
