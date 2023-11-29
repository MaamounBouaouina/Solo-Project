const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const db = require("./database/mongodb/index.js")
const { getAll, postGallery, removeGallery, updateGallery, findOneByname,findOneById} = require("./database/mongodb/index.js")
app.use(express.json());
app.use(cors());
app.use(express.json())


// Getting all the Gallery
app.get("/", (req, res) => {
  getAll().then((response) => {
    res.status(200).json(response)
  }).catch((err) => {
    res.status(400).send("error happen in get getAll server");
  })
});

// Posting Gallery:
app.post("/newGallery", (req, res) => {
  // console.log(req.body);
  postGallery(req.body).then((response) => {
    res.status(201).json(response)
  }).catch((err) => {
    res.status(400).send("error happen in addGallery in server")
  })
})

// Deleting a gallery
app.delete("/remGallery/:id", (req, res) => {
  let id = req.params.id
  // console.log(id);
  removeGallery(id).then((response) => {
    res.status(200).json("deleted successfully")
  }).catch((err) => {
    res.status(200).send("error happen delete in Server", err)
  })
})


// Update a description
app.put("/putDesc/:id", (req, res) => {
  let id = req.params.id
  console.log(typeof id);
  let description = req.body.description
  // console.log(req.body);
  updateGallery(id, description).then((response) => {
    res.status(200).json(response)
  }).catch((err) => {
    res.status(400).json("error happen in updateGallery in server")
  })
})

// Getting an artist
app.get("/:artist", (req, res) => {
  let artist = req.params.artist
  findOneByname(artist).then((response) => {
    res.status(200).json(response)
  }).catch((err) => {
    res.status(400).json("error happen in get by artist", err)
  })
})

// Getting by id:
app.get("/gallery/:id",(req,res)=>{
  let id = req.params.id
  console.log(typeof id);
  findOneById(id).then((response)=>{
   console.log(response);
  }).catch((err)=>{
    res.send("error happen on get by id",err)
  })
})
















app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
