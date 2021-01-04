const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const path = require('path');
const twig = require('twig');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const cors = require('cors')

const homeRouter = require('./routes/homeRouter.js');
const categoriesRouter = require('./routes/categoriesRouter.js');
const quizzsRouter = require('./routes/quizzsRouter.js');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

const port = 8000;

app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/home', homeRouter);

app.use('/categories', categoriesRouter);
app.use('/quizzs', quizzsRouter);

mongoose.connect('mongodb://localhost:27017/multiquizz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', () => console.log('Erreur lors de la connexion'));
db.once('open', () => {
    console.log("BDD dispo.");
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })
})


/* 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}); */

module.exports = app;