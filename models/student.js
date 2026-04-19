'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(models.Course, { foreignKey: 'StudentId' });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    major: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};