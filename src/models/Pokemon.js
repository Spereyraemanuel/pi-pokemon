const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   image: { //image
        type:DataTypes.STRING,
        allowNull: true
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    effect:{ //descripcion de ataque
      type: DataTypes.STRING,
      allowNull: true,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  });
};