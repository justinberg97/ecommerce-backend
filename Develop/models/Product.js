// import important parts of sequelize library (done)
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js (done)
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class (done)
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grape: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vintage_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
