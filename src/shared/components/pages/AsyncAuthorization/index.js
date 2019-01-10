import universal from 'react-universal-component'

import LoadingPage from 'app-components/LoadingPage'

export default universal(() => import(/* webpackChunkName: 'Authorization' */ './Authorization'), {
  loading: LoadingPage,
})