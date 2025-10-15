class ApiInventoryMovement {

    async FindById(req, res) {
        try{
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {} // await service.findById(inventoryMovement)

            res.status(200).send({inventoryMovement})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async findAll(req, res) {
        try{
            const organizationId = 1
            const {inventoryId } = req.params
            const inventoryMovements= [{}] // await service.findById(inventoryMovement)

            res.status(200).send({inventoryMovements})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Create(req, res) {
        try{
            const organizationId = 1
            const { inventoryId } = req.params
            const userId = 1
            const {type, amount, productId} = req.body
            const inventoryMovement = {} // await service.findById(inventoryMovement)

            res.status(200).send({inventoryMovement})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Update(req, res) {
        try{
            const organizationId = 1
            const { id, inventoryId } = req.params
             const {type, amount, productId} = req.body
            const inventoryMovement = {} // await service.findById(inventoryMovement)

            res.status(200).send({inventoryMovement})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Delete(req, res) {
        try{
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {} // await service.findById(inventoryMovement)

            res.status(200).send({inventoryMovement})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

}

module.exports = new ApiInventoryMovement();