const Users = require("../models/user.model");
const Roles = require("../models/roles.model");

const uuid = require('uuid')

const generateData = async() => {

  await Roles.bulkCreate([{name: "normal", id: "fef3a08d-2cec-4728-9745-7cbd2b37e557"}, {name: "admin", id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"}], {validate: true})
  await Users.create({
    "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    "name": "Albert Urbina",
    "gender": "masculino",
    "email": "albert@gmail.com",
    "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    "phone": "1234567890",
    "birthday_date": "08/07/1989",
    "role_id": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
    "profile_image": "",
  })
}


module.exports = generateData

