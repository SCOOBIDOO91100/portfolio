const express = require("express");
const router = express.Router();
const Project = require('../models/formModel');
const Projecto = require('../models/contactModel');

//GET
router.get('/', (req,res) => {
    Project.find((err, project) => {
        Projecto.find((err, projecto) => {
            if(err){
                res.send(err);
            }
            res.render('index.ejs', {project: project, projecto: projecto});
        })
        
    })
});

//POST
router.post('/index/creer-post', (req,res) => {
    const projecto = new Projecto(req.body);
    console.log(projecto)
    projecto.save (err => {
        if(err) {
            res.send(err);     
        }
        res.redirect('/');
    })
});


//GET
// router.get('/', (req,res) => {
//     Projecto.find((err, projecto) => {
//         console.log(projecto)
//         if(err){
//             res.send(err);
//         }
//         res.render('index', {projecto: projecto});
//     })
// });

module.exports = router;