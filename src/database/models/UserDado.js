module.exports = (sequelize, DataTypes) => {
    const alias = "UserDado";
  
    const columns = {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false
      },
      recidence: {
        type: DataTypes.STRING(11),
        allowNull: false
      },
      availability: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      motivation: {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    };
    const config = {
      tableName: "form_adoption",
      timestamps: false,
    };
  
    const UserDado = sequelize.define(alias, columns, config);
  
    return UserDado;
  }