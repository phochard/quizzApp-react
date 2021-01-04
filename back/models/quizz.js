const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizzSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    slug: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    },
    questions: [{
        title: { type: String },
        answers: [{
            answer: { type: String },
            correct: { type: Boolean }
        }, {
            answer: { type: String },
            correct: { type: Boolean }
        }, {
            answer: { type: String },
            correct: { type: Boolean }
        }, {
            answer: { type: String },
            correct: { type: Boolean }
        }]
    }]
});

const Quizz = mongoose.model('Quizz', quizzSchema);

module.exports = Quizz;