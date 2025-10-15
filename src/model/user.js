const database = require('../database')
const Organization = require('./organization')

class User {
    constructor() {
        this.model = database.db.define('users', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            role: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            organizationId: {
                type: database.Sequelize.INTEGER,
                references: {
                    model: Organization,
                    key: 'id'
                }
            }
        })

        // Define o relacionamento
        this.model.belongsTo(Organization, { foreignKey: 'organizationId' })
        Organization.hasMany(this.model, { foreignKey: 'organizationId' })
    }
}

module.exports = new User().model
