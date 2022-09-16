const uuid = require("uuid");
const Comments = require("../models/comments.model");
const Posts = require('../models/posts.model');

const createNewComments = async (data, userId, postId) => {
    const newPost = await Comments.create({
        id: uuid.v4(),
        postId: postId,
        userId: userId,
        description: data.description,
    })
    return newPost
}

const getCommentsByPost = async (id) => {
    const data = await Posts.findOne({
        where: id,
        include: {
            model: Comments
        }
    })
    return data;
}

module.exports = {
    createNewComments,
    getCommentsByPost
}