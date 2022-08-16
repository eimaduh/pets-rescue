module.exports = (sequelize, DataTypes) => {
    const alias = "Pet";
  
    const columns = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      breed: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      image: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    };
    const config = {
      tableName: "pets",
      timestamps: false,
    };
  
    const Pet = sequelize.define(alias, columns, config);
  
    return Pet;
  }