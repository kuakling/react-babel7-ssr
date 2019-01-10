export default {
  appContainerId: 'react-root',
  baseUrl: process.env.REACT_APP_BASE_URL ? `/${process.env.REACT_APP_BASE_URL}` : '',
  jwt: {
    name: 'appJWT',
    rounds: 10,
    secretKey: 'react-babel7-ssr'
  },
  restfulApi: {
    host: process.env.NODE_ENV == 'development' ? 'http://localhost:4001' : ''
  },
  sequelize: { //connect database settings
    username: 'root', //MySql Username
    password: '', //MySql Password
    dbname: 'react_babel7_ssr_db', //ชื่อฐานข้อมูล
    options: {
      host: 'localhost', //Mysql Host
      port: 3306, //MySql Port
      dialect: 'mysql', //ชนิดของโปรแกรมฐานข้อมูล
      operatorsAliases: false, // ไม่ใช้ $ ใน condition เพื่อความปลอดภัย
      typeCast: function (field, next) {
        if (field.type == 'DATETIME') {
          return new Date(field.string() + 'Z') // can be 'Z' for UTC or an offset in the form '+HH:MM' or '-HH:MM'
      }
        return next();
      },
      // dialectOptions: {
      //   useUTC: false //for reading from database
      // },
      // timezone: '+07:00', //for writing to database
      define: {
        freezeTableName: true, //เพื่อไม่ให้ sequelize เติม s หลังชื่อตาราง
        timestamps: false, //ให้ค่า default ของตารางไม่มีฟิลด์ createdAt, updatedAt
        underscored: true, //ให้ค่า default ของชื่อฟิลด์อัตโนมัติเป็น Underscores (เดิมเป็น Camel Case)
      },
      // logging: process.env.NODE_ENV !== 'production', //ปิดการแสดง log ตอน query ตาราง
      logging: process.env.NODE_ENV == 'production' ? false : console.log
    },
  },
}