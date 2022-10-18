'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Turmas.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      });

      // usando essa parte do codigo para nomear a chave estrangeira
      //como chave estrangeira
      Turmas.belongsTo(models.Pessoas, { // atenção nessa parte para nomear o nome da coluna do lado da turma
        foreignKey: 'docente_id'
      });
      Turmas.belongsTo(models.Niveis, {
        foreignKey: 'nivel_id'
      }); 
    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};