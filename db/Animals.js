const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define("Animals", {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
      },
      kind_of_animal : {
        type : Sequelize.STRING(30),
        allowNull: false
      },
      description : {
        type : Sequelize.STRING(60),
        allowNull: false
      },
      removed : {
        type : Sequelize.BOOLEAN,
        allowNull: false
      },
    }, {
        timestamps: false,
        tableName: 'animals'
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