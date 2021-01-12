const { response } = require('express');

RRoot = require('./rootModel');

exports.index = (req, res) => {
    RRoot.get((err, roots) => {
        if(err){
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "Roots retrived",
            data: roots
        })
    })
}

exports.new = (req, res) => {
    var root = new RRoot();
    root.name = req.body.name;
    root.save((err) => {
        if(err){
            response.json(err)
        }
        res.json({
            message: 'New root',
            data: root
        })
    })
}

exports.view = (req, res) => {
    RRoot.findById(req.params.root_id, (err, root) => {
        if(err){
            res.send(err)
        }
        res.json({
            message: 'Details',
            data: root
        })
    })
}

exports.update = (req,res) => {
    RRoot.findById(req.params.root_id, (err, root) => {
        if(err){
            res.send(err)
        }
        root.name = req.body.name;
        root.save((err) => {
            if(err){
                res.json(err)
            }
            res.json({
                message: 'Updated',
                data: root
            })
        })
    })
}

exports.delete = (req, res) => {
    RRoot.remove({
        _id: req.params.root_id
    }, (err, root) => {
        if(err){
            res.send(err)
        }
        res.json({
            status: 'Success',
            message: 'Deleted'
        })
    })
}