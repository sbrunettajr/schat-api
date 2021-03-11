'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {

    static associate(models) {
      
    }

  };

  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    }
  }, 
  {
    sequelize,
    modelName: 'User',
  });

  return User;

};