const router = require('express').Router()
const postsServices = require('./posts.http')
const commentsServices = require('../comments/comments.htpp')

router.route('/')
    .get(postsServices.getAll)
    .post(postsServices.createPost)

router.route('/:id')
    .get(postsServices.getById)

router.route(':id/comments')
    .get(commentsServices.getCommentsByPost)
    .post(commentsServices.createComment)

module.exports = {
    router
}