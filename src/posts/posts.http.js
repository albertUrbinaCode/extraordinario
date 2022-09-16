const postsControllers = require('./posts.controllers')

const getAll = (req, res) => {
    postsControllers.getAllPosts()
        .then(response => {
            res.status(200).json({items: response.length, users: response})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createPost = (req, res) => {
    const userId = req.user.id
    const data = req.body

    postsControllers.createNewPost(data, userId)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

const getById = (req, res) => {
    const id = req.params.id;
    postsControllers.
        getPostsById(id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(400).json({messsage: `El posts con el id ${id} no existe`})
            });
}


/* const getMyPosts = (req, res) => {
    const id = req.user.id;
    userControllers.getPostsById(id)
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  } */

module.exports = {
    getAll,
    createPost,
    getById,
    
}