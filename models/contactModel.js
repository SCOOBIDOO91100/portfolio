const mongoose = require ("mongoose");

//a corriger
const nabiloSchema = mongoose.Schema({
    titre_2: String,
});

const Projecto = mongoose.model("projecto", nabiloSchema );

module.exports = Projecto