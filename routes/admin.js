const express = require("express");
const router = express.Router();
const Database = require('../models/database');
const Project = require('../models/formModel');
const db = new Database();

//GET
router.get('/admin', (req,res) => {
    res.render('admin.ejs');
});

//POST
router.post('/admin/create-project', (req,res) => {
    const project = new Project(req.body);
    project.save (err => {
        if(err) {
            res.send(err);
        }
        res.redirect('/');
    })
});


module.exports = router;