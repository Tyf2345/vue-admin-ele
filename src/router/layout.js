import layout from '@/views/layout'
import RouterHome from './home'
import RouterIcon from './icon'
import RouterTable from './table'
import RouterCollapse from './collapse'
import RouterInfiniteScroll from './InfiniteScroll'
import RouterCharts from './charts'
import RouterSettings from './settings'
import RouterPersonal from './personal'
import RouterEditor from './editor'
const RouterLayout = [
  {
    path: '/',
    name: '首页',
    component:layout,
    redirect: RouterHome[0].path,
    children:[
      ...RouterHome,
      ...RouterIcon,
      ...RouterTable,
      ...RouterCollapse,
      ...RouterInfiniteScroll,
      ...RouterCharts,
      ...RouterEditor,
      ...RouterSettings,
      ...RouterPersonal
    ]
  }
]

export default RouterLayout