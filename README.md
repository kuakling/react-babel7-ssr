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