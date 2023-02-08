const { User } = require("./contants/user");

const addNewUser = (name) => {
  const newUser = {
    name,
    id: "",
    pass: "",
    dayoff: false,
  };

  User.push(newUser);
};

const showUser = () => {
  console.log(User);
};

addNewUser("Le Minh Tien");
showUser();
