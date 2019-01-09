import universal from 'react-universal-component'

import LoadingPage from 'app-components/LoadingPage'

export default universal(() => import(/* webpackChunkName: 'Stylus' */ './Stylus'), {
  loading: LoadingPage,
})