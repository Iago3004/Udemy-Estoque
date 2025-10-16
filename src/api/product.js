const { or } = require("sequelize")
const serviceProduct = require("../service/product")

class ApiProduct {

    async FindById(req, res) {
        try{
            const { id } = req.params
            const organizationId = 1
            const product = await serviceProduct.FindById(organizationId, id)

            res.status(200).send({product})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async findAll(req, res) {
        try{
            const organizationId = 1
            const products= await serviceProduct.findAll(organizationId)

            res.status(200).send({products})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Create(req, res) {
        try{
            const organizationId = 1
            const { name, description } = req.body
            const product = await serviceProduct.Create(organizationId, name, description)

            res.status(200).send({product})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Update(req, res) {
        try{
            const organizationId = 1
            const { id} = req.params
            const {name, description } = req.body
            const product = await serviceProduct.Update(organizationId, id, name, description)

            res.status(200).send({product})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Delete(req, res) {
        try{
            const organizationId = 1
            const { id } = req.params
            const product = await serviceProduct.Delete(organizationId, id)

            res.status(200).send({product})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

}

module.exports = new ApiProduct();