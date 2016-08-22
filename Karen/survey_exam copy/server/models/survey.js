console.log('At the SURVEYMODEL')
var mongoose = require('mongoose');
var surveySchema = new mongoose.Schema({
    name: {
        type: String },
    question: {
        type: String,
        required: true
    },
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        required: true
    },
    c: {
        type: String,
        required: true
    },
    d: {
        type: String,
        required: true
    },
    voteA: {
        type: Number,
        default: 0
    },
    voteB: {
        type: Number,
        default: 0
    },
    voteC: {
        type: Number,
        default: 0
    },
    voteD: {
        type: Number,
        default: 0
    },


},   {timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

var Surveys = mongoose.model('Surveys', surveySchema)
