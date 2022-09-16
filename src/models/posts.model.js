const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");
const Users = require("./users.model");

const Posts = db.define("posts", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
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
  likes: {
    allowNull: false,
    type: DataTypes.SMALLINT,
    defaultValue: 0,
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

module.exports = Posts;