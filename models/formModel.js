const mongoose = require ("mongoose");

const nabilSchema = mongoose.Schema({
    titre: String,
    description: String,
    image: String
});

const Project = mongoose.model("project", nabilSchema );

module.exports = Project;

