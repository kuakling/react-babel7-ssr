import universal from 'react-universal-component'

import LoadingPage from 'app-components/LoadingPage'

export default universal(() => import(/* webpackChunkName: 'Signup' */ './Signup'), {
  loading: LoadingPage,
})