const userControllers = require("./users.controllers");

const getAll = (req, res) => {
  userControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json({ items: response.length, users: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  userControllers
    .getUserById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `El usuario con el id ${id} no existe` });
    });
};

const register = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.name ||
    !data.gender ||
    !data.email ||
    !data.password ||
    !data.birthday_date
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        gender: "masculine",
        email: "examle@examle.com",
        password: "string",
        birthday_date: "DD/MM/YYYY",
      },
    });
  } else {
    userControllers.createUser(data)
      .then((response) => {
        res.status(201).json({
          message: `User created succesfully with id: ${response.id}`,
          user: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  userControllers.deleteUser(id)
    .then((response) => {
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
};

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.name ||
    !data.gender ||
    !data.email ||
    !data.password ||
    !data.birthday_date
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        gender: "masculine",
        email: "examle@examle.com",
        password: "string",
        birthday_date: "DD/MM/YYYY",
      },
    });
  } else {
    const response = userControllers.editUser(id, data, req.user.rol);
    return res.status(200).json({
      message: "User edited succesfully",
      user: response,
    });
  }
};

const editMyUser = (req, res) => {
  const id = req.user.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.name ||
    !data.gender ||
    !data.email ||
    !data.password ||
    !data.birthday_date
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        gender: "masculine",
        email: "examle@examle.com",
        password: "string",
        birthday_date: "DD/MM/YYYY",
      },
    });
  } else {
    const response = userControllers.editUser(id, data);
    return res.status(200).json({
      message: "User edited succesfully",
      user: response,
    });
  }
};

const getMyUser = (req, res) => {
  const id = req.user.id;
  const data = userControllers.getUserById(id);
  res.status(200).json(data);
};

const removeMyUser = (req, res) => {
  const id = req.user.id;
  const data = userControllers.deleteUser(id);
  if (data) {
    res.status(204).json();
  } else {
    res.status(400).json({ message: "invalid id" });
  }
};

module.exports = {
  getAll,
  getById,
  register,
  remove,
  edit,
  editMyUser,
  getMyUser,
  removeMyUser,
};
