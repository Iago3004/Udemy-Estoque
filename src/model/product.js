const database = require('../database')
const Organization = require('./organization')

class Product {
    constructor() {
        this.model = database.db.define('products', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: database.Sequelize.STRING,
                allowNull: false
            },
            description:{
                type: database.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            organizationId: {
                type: database.Sequelize.INTEGER,
                    references:{
                        model: Organization,
                        key: 'id'
                    }
                },          
            })
                      
            
            this.model.belongsTo(Organization, { 
                        foreignKey: 'organizationId'
                });
                Organization.hasMany(this.model, {
                    foreignKey: 'organizationId'
                })
        }
    }
        
module.exports = new Product().model