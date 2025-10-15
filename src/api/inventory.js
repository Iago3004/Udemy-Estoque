class ApiInventory {

    async FindById(req, res) {
        try{
            const organizationId = 1
            const { id } = req.params
            const inventory = {} // await service.findById(inventory)

            res.status(200).send({inventory})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async findAll(req, res) {
        try{
            const organizationId = 1
            const inventories= [{}] // await service.findById(inventory)

            res.status(200).send({inventories})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Create(req, res) {
        try{
            const organizationId = 1
            const { name } = req.body
            const inventory = {} // await service.findById(inventory)

            res.status(200).send({inventory})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Update(req, res) {
        try{
            const organizationId = 1
            const { id } = req.params
            const { name } = req.body
            const inventory = {} // await service.findById(inventory)

            res.status(200).send({inventory})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

    async Delete(req, res) {
        try{
            const organizationId = 1
            const { id } = req.params
            const inventory = {} // await service.findById(inventory)

            res.status(200).send({inventory})
        } catch(error){
            res.status(500).send({msg: error.message})

        }
        

    }

}

module.exports = new ApiInventory();