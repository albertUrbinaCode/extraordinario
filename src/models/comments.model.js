const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");
const Posts = require("./posts.model");
const Users = require("./users.model");

const Comments = db.define("comments", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  postId: {
    allowNull: false,
    type: DataTypes.UUID,
    field: "post_id",
    references: {
      model: Posts,
      key: 'id'
    }
  },
  userId: {
    allowNull: false,
    type: DataTypes.UUID,
    field: "user_id",
    references: {
      model: Users,
      key: 'id'
    }
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "updated_at",
  },
});

module.exports = Comments;