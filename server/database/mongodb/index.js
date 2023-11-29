const mongoose = require('mongoose');
const { async } = require('rxjs');
const { find } = require('rxjs-compat/operator/find');
mongoose.connect('mongodb://127.0.0.1/gallery').then(() => {
  console.log("Connected Successfully");
}).catch(err => {
  console.log("error happen in you db", err);
})


// ADD your Schema here!
let gallerySchema = mongoose.Schema({
  artist: String,
  painting: String,
  description: String,
  date: String,
  image_url: String,
  museum: String,
  mus_img: String
})
// ADD the Model mpiled from the above Schema
let Gallery = mongoose.model("Gallery", gallerySchema);

// ADD Functions to interact with the Schema
const getAll = async () => {
  return await Gallery.find({})
}

const postGallery = async (painting) => {
  return await Gallery.create(painting)
}

const removeGallery = async (id) => {
  return await Gallery.deleteOne({ _id: id })
}

const updateGallery = async (id, description) => {
  return await Gallery.findByIdAndUpdate(id, { description })
}

const findOneByname = async (artist) => {
  return await Gallery.findOne({ artist })
}

const findOneById = async (id) => {
  return find({ _id: id })
}

// Don't forget to export your functions!
module.exports = {
  getAll, postGallery, removeGallery, updateGallery, findOneByname, findOneById
};
