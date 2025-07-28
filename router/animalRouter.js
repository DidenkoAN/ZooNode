const Router = require("express");
const router = new Router();
const animalController = require("../controller/animalController");

router.post("/add", animalController.add);
router.get("/get", animalController.getAnimals);
router.delete("/delete", animalController.deleteAnimal);
router.post("/updete", animalController.update);

module.exports = router;
