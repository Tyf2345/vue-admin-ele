// import RouterHome from './home'

import RouterLogin from './login'
import RouterLayout from './layout'
import RouterNotFound from './notFound'
const RouterConfig = [
  ...RouterLogin,
  ...RouterLayout,
  ...RouterNotFound
]
export default RouterConfig