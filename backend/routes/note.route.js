const express = require('express');
const noteRoute = express.Router();

// Note model
let NoteModel = require('../models/Note');

// Get all data
noteRoute.route('/').get((req, res, next) => {
    NoteModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create note data
noteRoute.route('/create-note').post((req, res, next) => {
    NoteModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit note data
noteRoute.route('/edit-note/:id').get((req, res, next) => {
    NoteModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update note data
noteRoute.route('/update-note/:id').put((req, res, next) => {
    NoteModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Note successfully updated.')
        }
    })
})

// Delete note data
noteRoute.route('/delete-note/:id').delete((req, res, next) => {
    NoteModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = noteRoute;