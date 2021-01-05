const posts = require('../models/post.model');
const createError = require('http-errors');
const { post } = require('../config/router.config');

module.exports.list = async (req, res, next) => {
    const postsDB = await posts.find();
	res.render('posts/list', {
        posts: postsDB,
        path: req.path
    })
}

module.exports.createNew = (req, res, next) => {
	res.render('posts/createNew', {
        create: true
    });
}

module.exports.create = (req, res, next) => {
    const { title, image, text } = req.body;
    const errors = {};

    if (!title || !text) {
        if (!title) {
            errors.title = true;
        }
        if (!text) {
            errors.text = true
        }
        res.render('posts/createNew', {
            post: req.body,
            errors,
            create: true
        })
    } else {
        posts.create({
            title,
            image,
            text
        });
        res.redirect('/posts');
    }
}

module.exports.detail = async (req, res, next) => {
    const { id } = req.params;
    const post = await posts.findById(id);
    res.render('posts/detail', {post});
}

module.exports.delete = (req, res, next) => {
    const { id } = req.params;
    posts.findByIdAndDelete(id);
    res.redirect('/posts');
}

module.exports.edit = async (req, res, next) => {
    const { id } = req.params;
    const post = await posts.findById(id);
    res.render('posts/edit', {
        post
    });
}

module.exports.update = (req, res, next) => {
    const { id } = req.params;
    const { title, image, text } = req.body;
    posts.findByIdAndUpdate(id, {
        title,
        image,
        text
    });
    res.redirect('/posts');
}