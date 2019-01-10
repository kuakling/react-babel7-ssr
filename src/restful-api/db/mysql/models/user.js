export default (sequelize, DataTypes) => {

  const schema = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        notEmpty: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        notEmpty: true,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        notEmpty: true,
      },
      last_login: {
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10
      }
    },
    {
      timestamps: true, //ตารางนี้ใช้ created_at และ updated_at
    }
  )

  // schema.associate = models => {
  //   schema.hasOne(models.user_profile, { as: 'profile' });
  // }

  return schema
}