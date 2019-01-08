# react-babel7-ssr
React 16, Webpack 4, Babel 7 and Server side rendering

## Depencies
- React-Router-Dom (React Router v.4)
- Styled-Components
- React-Universal-Component (Code Splitting)
  - @babel/plugin-syntax-dynamic-import
  - babel-plugin-universal-import
- Stylus (Update className to local name of component and create src/components/shared/style.global.styl for global css className)
  - stylus
  - stylus-loader
- React-Helmet
- Redux
  - react-redux
  - redux
  - redux-thunk
  - @babel/plugin-proposal-decorators (use decorator of HOC)
  - cookie-parser (Remember app-state for SSR)
- Restful API 
  - Dev mode on port 4001
  - Create new routes by create new file 
  - Path and file name is route (root path = src/restful-api/routes)
    - example 1 root filder: routeXxx.js ==> /xxx
    - example 2 sub folder: alphabet/routeAbc.js ==> /alphabet/abc
    - example 3 convert route camelcase to dash: AsiaAnimal/routeReptileFamily.js ==> /asia-animal/reptile-family