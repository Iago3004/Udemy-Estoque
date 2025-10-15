const generatePassword = require('../fns/generate-password');
const organization = require('../model/organization');
const modelOrganization  = require('../model/organization');
const serviceUser = require('./user');

class ServiceOrganization{

    findById(id, transaction){
        return modelOrganization.findByPk(id, { transaction });
    }

    async create({ name, address, phone, email }, transaction){
    if(!name){
        throw new Error("Favor informar o campo nome")
    } else if(!address){
        throw new Error("Favor informar o campo endereço")
    } else if(!phone){
        throw new Error("Favor informar o campo telefone")
    } else if(!email){
        throw new Error("Favor informar o campo email")
    }

    const organization = await modelOrganization.create(
        { name, address, phone, email },
        { transaction }
    );

    const password = generatePassword();
    const user = await serviceUser.create(
        organization.id,
        `Admin ${name}`,
        email,
        password,
        `admin`,
        transaction
    );


    return { organization, user: { ...user.dataValues, password } };
}


    async update(id, name, address, phone, email, transaction){
        const organization = await this.findById(id, transaction)
        if(!organization){  
            throw new Error("Organização não encontrada")
        }

        organization.name = name || organization.name
        organization.address = address || organization.address
        organization.phone = phone  || organization.phone
        organization.email = email || organization.email

        return organization.save({ transaction })
    }

    async delete(id, transaction){
        const organization = await this.findById(id, transaction)

        if(!organization){  
            throw new Error("Organização não encontrada")
        }

        organization.destroy({ transaction })
    }
}

module.exports = new ServiceOrganization();