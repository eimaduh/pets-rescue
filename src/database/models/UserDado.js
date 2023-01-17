module.exports = (sequelize, DataTypes) => {
    const alias = "UserDado";
  
    const columns = {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempoDisponivel: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING(11),
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