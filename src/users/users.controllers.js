const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const Users = require('../models/users.model')

const userDB = [{
  "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
  "name": "Albert Urbina",
  "gender": "masculino",
  "email": "albert.abraham.urbina@gmail.com",
  "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
  "phone": "1234567890",
  "birthday_date": "08/07/1989",
  "role": "admin",
  "profile_image": "",
}];

const getAllUsers = async () => {

  const data = await Users.findAll({
    attributes: {
      exclude: ['password']
    }
  })
  return data;
  //? select * from users;
};

const getUserById = async(id) => {
  const data = await Users.findOne({
    where: {
      id
    },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    }
  })
  return data
  //? select * from users where id = ${id};
};

const createUser = async(data) => {
  const newUser =  await Users.create({
    id: uuid.v4(), 
    name: data.name, 
    gender: data.gender, 
    email: data.email, 
    password: hashPassword(data.password), 
    phone: data.phone, 
    birthday_date: data.birthday_date,
    role_id: "fef3a08d-2cec-4728-9745-7cbd2b37e557", 
    profile_image: data.profile_image,
  })
  return newUser
};

const editUser = async (userId, data, userRol) => {
  const { id, password, verified, role_id, ...restOfProperties } = data;
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {
    const response = await Users.update(
      { ...restOfProperties, role_id },
      { where: { id: userId } }
    );
    return response;
  } else {
    const response = await Users.update(restOfProperties, {
      where: { id: userId },
    });
    return response;
  }
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id
    }
  })
  return data
}

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: { email },
    attributes: {
      exclude: ["createdAt", "updatedAt", "roleId"],
    },
  });
  return data;
  //? select * from users where email = ${email};
};


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserByEmail,
}

