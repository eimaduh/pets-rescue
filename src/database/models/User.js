module.exports = (sequelize, DataTypes) => {
    const alias = "User";
  
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
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    };
    const config = {
      tableName: "users",
      timestamps: false,
    };
  
    const User = sequelize.define(alias, columns, config);
  
    return User;
  }