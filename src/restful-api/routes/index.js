
import path from 'path'
import glob from 'glob'
const baseUrl = '/rest'
const routes = [];
const files = glob.sync(path.resolve(__dirname, '**/route*.js'))
files.map(file => {
  const baseName = path.basename(file)
  const pureName = baseName.split('.').slice(0, -1).join('.')
  const routeName = pureName.substr(5)
  const filePath = file.replace(__dirname, '').replace(baseName, '')
  // const baseRoute = `${baseUrl}${filePath}${routeName}`
  const baseRoute = path.resolve(
    path.join(baseUrl, filePath),
    routeName.toLowerCase() == 'index' ? '' : routeName
  )
  const url = baseRoute.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()
  const middleware = require(file)
  routes.push({
    url,
    middleware
  })
})

export default routes