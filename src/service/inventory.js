const modelIventory = require('../model/inventory')

class ServiceInventory {
  async FindById(organizationId, id, transaction){
        return modelIventory.findOne(
            { where: { organizationId, id }},
            { transaction }
        )
    }


    async FindAll(organizationId, transaction){
        return modelIventory.findAll(
            { where: { organizationId }},
            { transaction }
        )
    }


  async Create(organizationId, name, transaction){
    if(!organizationId){
      throw new Error('Favor informar o cmapo organizationId')
    } else if(!name){
      throw new Error('Favor informar o cmapo name')
    }

    return modelIventory.create(
      { organizationId, name },
      { transaction }
    )
  }


  async Update(organization, id, name, transaction){
    const oldIventory = await this.FindById(organization, id)
    if(!oldIventory){
      throw new Error('Estoque não encontrado')
    }
    oldIventory.name = name || oldIventory.name

    return oldIventory.save({ transaction })
  }


  async Delete(organization, id, transaction){
    const oldIventory = await this.FindById(organization, id)
    if(!oldIventory){
      throw new Error('Estoque não encontrado')
    }

    await oldIventory.destroy({ transaction })
  }
    
  }

module.exports = new ServiceInventory()