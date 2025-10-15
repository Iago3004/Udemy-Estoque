const modelUser = require("../model/user")
const bcrypt = require("bcrypt")

const roles = ['admin', 'employer']
const salt = 12

class ServiceUser {
    async FindAll(organizationId){
        return modelUser.findAll(
            { where: { organizationId }, transaction }
        );
    }

    async FindById(id, organizationId, transaction){
        return modelUser.findOne(
            { where: { organizationId }, transaction }
        );

    }

    async Create(name, email, password, role, transaction, organizationId){
        if(!organizationId){
            throw new Error("Organização é obrigatória")
        }else if(!name){
            throw new Error("Nome é obrigatório")
        }else if(!email){
            throw new Error("Email é obrigatório")
        }else if(!password){
            throw new Error("Senha é obrigatória")
        }else if(!role || !roles.includes(role)){
            throw new Error("Favor informar a permissão corretamente")
        }

        const hashPass = await bcrypt.hash(password, salt)

        return modelUser.create(
            {organizationId, name, email, password: hashPass, role}, 
            {transaction }
        );
    }


    async Update(organizationId, id, name, email, password, role, transaction){
        const oldUser = await this.FindById(organizationId, id, transaction)
        if(!oldUser){
            throw new Error("Usuário não encontrado!")
        }

        
        if(role & !roles.includes(role)){
            throw new Error("Favor informar a permissão corretamente!")
        }

        if(role && oldUser.role ==='admin'){
            oldUser.role = role 

        }

        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password 
    
        await oldUser.save({ transaction })

        return oldUser
    
    }

    async Delete(organizationId, id, transaction){
    const oldUser = await this.FindById(id, organizationId, transaction)
    if(!oldUser){
        throw new Error("Usuário não encontrado!")
    }

    await oldUser.destroy({ transaction })
}


// async login(){}

//async verify(){}

}

module.exports = new ServiceUser();