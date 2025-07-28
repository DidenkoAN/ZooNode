const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "b2gypxsnuklkcbye68ms",
  "uhnufo2hrgzldjmm",
  "u5xBW9MLM2GkGvkMfHeg",
  {
    dialect: "mysql",
    host: "b2gypxsnuklkcbye68ms-mysql.services.clever-cloud.com",
    logging: false,
  }
);

const Users = require("./Users")(sequelize);
const Animals = require("./Animals")(sequelize);
const AnimalCards = require("./AnimalCards")(sequelize);

Animals.hasMany(AnimalCards, { foreignKey: "animal", sourceKey: "id" });
AnimalCards.belongsTo(Animals, { foreignKey: "animal", targetKey: "id" });

module.exports = {
  sequelize: sequelize,
  users: Users,
  animals: Animals,
  animalCards: AnimalCards,
};
