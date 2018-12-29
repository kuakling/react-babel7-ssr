import universal from 'react-universal-component'

import LoadingPage from '../LoadingPage'

export default universal(() => import(/* webpackChunkName: 'About' */ './About'), {
  loading: LoadingPage,
})