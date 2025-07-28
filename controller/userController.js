const { users } = require("../db");
const bcrypt = require("bcrypt");

class userController {
  async registration(req, res) {
    const { name, email, password, phone } = req.body;
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await users.create({
      name: name,
      password: hashPassword,
      email: email,
      phone: phone,
      removed: 0,
    });
    res.json({ user });
  }

  async authorization(req, res) {
    const { email, password } = req.body;
    const user = await users.findOne({ where: { email: email } });
    const inPassword = bcrypt.compareSync(password, user.password);
    res.json({ user });
  }

  async deleteProfile(req, res) {
    const { id } = req.body;
    await users.destroy({ where: { id: id } });

    res.json();
  }

  async getUsers(req, res) {
    const usersAll = await users.findAll({ where: { removed: 0 } });
    res.json({ usersAll });
  }
}

module.exports = new userController();
