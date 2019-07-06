/* eslint-disable class-methods-use-this */
const Users = [{ id: 1, name: 'Maria' }, { id: 2, name: 'Joao' }, { id: 3, name: 'Jose' }];

class UserController {
  list(req, res) {
    res.send(Users);
  }

  achaum(req, res) {
    const { id } = req.params;

    const response = Users.find(Users => Users.id == id);
    res.send(response);
  }

  create(req, res) {
    Users.push(req.body);
    res.sendStatus(200);
  }
}
module.exports = new UserController();
