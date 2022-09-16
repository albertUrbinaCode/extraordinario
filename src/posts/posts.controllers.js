const uuid = require("uuid");
const Posts = require('../models/posts.model');
const Comments = require('../models/comments.model');

const getAllPosts = async () => {
    const data = await Posts.findAll()
    return data
}

const createNewPost = async (data, userId) => {
    const newPost = await Posts.create({
        id: uuid.v4(),
        description: data.description,
        userId: userId,
        likes: data.likes,
    })
    return newPost
}

const getPostById = async (id) => {
    const data = await Posts.findOne({
        where: id,
    })
    return data;
}


/* const getAllCommentsByPost = async (id) => {
    const data = await Comments.findAll({
        where: {
            postId: id
        }
    })
    return data
} */

const getMyPosts = async (id) => {
    const data = await Posts.findAll({
        where: {
            userId: id
        },
        include: {
            model: Posts,
        }
    })
    return data;
}
module.exports = {
    createNewPost,
    getAllPosts,
    getPostById,
    getMyPosts
}