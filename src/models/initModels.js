const Users = require('./users.model')
const Posts = require('./posts.model');
const Roles = require('./roles.model');
const Comments = require('./comments.model');

const initModels = () => {

    //? Users <- Roles
    Roles.hasMany(Users);
    Users.belongsTo(Roles);
    
    //? Posts <- Users
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Comments <- Posts
    Posts.hasMany(Comments)
    Comments.belongsTo(Posts)

}

module.exports = initModels;