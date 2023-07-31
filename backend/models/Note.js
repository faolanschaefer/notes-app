const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noteSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
}, {
    collection: 'notes'
})

module.exports = mongoose.model('Note', noteSchema)