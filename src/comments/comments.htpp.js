const commentsControllers = require('./comments.controllers')

const createComment = (req, res) => {
    const userId = req.user.id
    const data = req.body
    const postId = req.params.id

    commentsControllers.createNewComments(data, userId, postId)
        .then(response => {
            res.status(201).json({items: response.length, users: response})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

const getCommentsByPost = (req, res) => {
    const id = req.params.id;
    commentsControllers.getCommentsByPost(id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(204).json({messsage: `El posts con el id ${id} no tiene comentarios`})
            });
}

module.exports = {
    createComment,
    getCommentsByPost
}