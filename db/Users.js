const Sequelize = require("sequelize");
const Users = this.Users;

module.exports = function (sequelize) {
  return sequelize.define(
    "Users",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      removed: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );
};

async function Create(parametres) {
  await Users.create({
    name: parametres[0],
    email: parametres[1],
    phone: parametres[2],
    password: parametres[3],
    removed: "false",
  });
}
//Create();

async function Update() {
  await Users.update(
    {
      name: "name",
      email: "email",
      phone: "phone",
      password: "password",
      removed: "false",
    },
    {
      where: {
        id: 1, //Относительное нахождение потом
      },
    }
  );
}
//Update();
async function Delete() {
  await Users.destroy({
    where: {
      id: 1,
    },
  });
}
//Delete();
