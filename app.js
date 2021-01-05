const createError = require('http-errors');
const express = require('express');
const path = require('path');

const app = express();

// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
require('./config/hbs.config');

app.use(express.static(path.join(__dirname, 'public')));

// Configure body parser
app.use(express.urlencoded({ extended: true }));

// Configure router
const router = require('./config/router.config');
app.use('/', router);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((error, req, res, next) => {
	console.error(error);
	res.status(error.status);
	res.render('errors/error', {error});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.info(`App listen at ${port} port`);
});