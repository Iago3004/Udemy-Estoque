const organization = require("../model/organization");
const serviceUser = require("../service/user");

class ApiUser {
  async FindById(req, res) {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const user = await serviceUser.FindById(id, organizationId);
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async FindAll(req, res) {
    try {
      const organizationId = 1;
      const users = await serviceUser.FindAll(organizationId);
      res.status(200).send({ users });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Create(req, res) {
    try {
      const { name, email, password, role, organizationId } = req.body;

      // Caso não venha no body, define um ID padrão (ex: 1)
      const orgId = organizationId || 1;

      const user = await serviceUser.Create(name, email, password, role, null, orgId);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Update(req, res) {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const { name, email, password, role } = req.body;

      const user = await serviceUser.Update(organizationId, id, name, email, password, role);
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

async Delete(req, res) {
  try {
    const organizationId = 1;
    const { id } = req.params;

    if (!id) {
      throw new Error("ID é obrigatório para deletar o usuário");
    }

    const user = await serviceUser.Delete(organizationId, id);
    res.status(200).send({ msg: "Usuário deletado com sucesso", user });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

}

module.exports = new ApiUser();
