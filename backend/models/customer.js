"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.Floor, {
        foreignKey: "id",
      });
      Customer.hasOne(models.Bill, {
        foreignKey: "id",
      });
    }
  }
  Customer.init(
    {
      customerName: DataTypes.STRING,
      floorNumber: DataTypes.NUMBER,
      previousBalance: DataTypes.NUMBER,
      currentBillAmount: DataTypes.NUMBER,
      paidAmount: DataTypes.NUMBER,
      remainingBalance: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};