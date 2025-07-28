const Sequelize = require('sequelize');
const AnimalCards = this.AnimalCards;

module.exports = function (sequelize) {
    return sequelize.define("AnimalCards", {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
      },
      aviarynumber : {
        type : Sequelize.INTEGER,
        allowNull: false
      },
      animal : {
        type : Sequelize.INTEGER,
        allowNull: false
      },
      birthday : {
        type : Sequelize.DATE,
        allowNull: false
      },
      moniker : {
        type : Sequelize.STRING(30),
        allowNull: false
      },
      description : {
        type : Sequelize.STRING(60),
        allowNull: false
      },
      food : {
        type : Sequelize.STRING(30),
        allowNull: false
      },
      photo : {
        type : Sequelize.STRING(60),
        allowNull: false
      },
      removed : {
        type : Sequelize.BOOLEAN,
        allowNull: false
      },
    }, {
        timestamps: false,
        tableName: 'animal_cards'
    });
};


async function Create(parametres){
  await AnimalCards.create({
    aviarynumber: parametres[0],
    animal: parametres[1],
    birthday: parametres[2],
    moniker: parametres[3],
    description: parametres[4],
    food: parametres[5],
    photo: parametres[6],
    removed: parametres[7]
  })
}

async function Update(parametres,idAnimals){
  await AnimalCards.update({
    aviarynumber: parametres[0],
    animal: parametres[1],
    birthday: parametres[2],
    moniker: parametres[3],
    description: parametres[4],
    food: parametres[5],
    photo: parametres[6],
    removed: parametres[7]
  }, {
    where: {
      id: idAnimals
    }
  })
}

async function Delete(idAnimals){
  await AnimalCards.destroy({
    where: {
      id: idAnimals
    }
  })
}

async function Select(){
  return result = await AnimalCards.findAll();
}