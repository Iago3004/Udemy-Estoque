const ServiceOrganization = require("../service/organization");





class ApiOrganization {

   async FindById(req, res) {
  try {
    const { id } = req.params;
    const organization = await ServiceOrganization.findByPk(id);

    if (!organization) {
      return res.status(404).send({ msg: "Organização não encontrada" });
    }

    res.status(200).send({ organization });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}


   async Create(req, res) {
  try {
    const { name, address, phone, email } = req.body;

    const organization = await ServiceOrganization.create({
      name,
      address,
      phone,
      email
    });

    res.status(200).send({ organization });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

    async Update(req, res) {
  try {
    const { id } = req.params;
    const { name, address, phone, email } = req.body;

    const [updated] = await ServiceOrganization.update(
      { name, address, phone, email },
      { where: { id } }
    );

    if (updated) {
      const updatedOrganization = await ServiceOrganization.findByPk(id);
      res.status(200).send({ updatedOrganization });
    } else {
      res.status(404).send({ msg: "Organização não encontrada" });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}


    async Delete(req, res) {
  try {
    const { id } = req.params;

    const deleted = await ServiceOrganization.destroy({ where: { id } });

    if (deleted) {
      res.status(200).send({ msg: "Organização excluída com sucesso" });
    } else {
      res.status(404).send({ msg: "Organização não encontrada" });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}


}

module.exports = new ApiOrganization();