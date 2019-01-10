import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../../../../shared/core/config'
const { dbname, username, password, options } = config.sequelize
const sequelize = new Sequelize(
  dbname,
  username,
  password,
  options
)
const db = {}

const modelsDir = path.resolve(__dirname) 
fs.readdirSync(modelsDir)
  .filter( file => (file.indexOf(".") !== 0) && (file !== "index.js"))
  .forEach( file => {
    const model = sequelize.import(path.join(modelsDir, file))
    db[model.name] = model
  });

Object.keys(db).forEach( modelName => {
  if ("associate" in db[modelName]) {
    // console.log('associate ======>', modelName)
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;


export default db