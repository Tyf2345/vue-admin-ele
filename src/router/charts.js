
export default [
{
  path: '/charts/line',
  name: '折线图',
  component: ()=>import('../views/charts/line')
},{
  path: '/charts/bar',
  name: '柱状图',
  component: ()=>import('../views/charts/bar')
},{
  path: '/charts/pie',
  name: '饼图',
  component: ()=>import('../views/charts/pie')
},{
  path: '/charts/scatter',
  name: '散点图',
  component: ()=>import('../views/charts/scatter')
},{
  path: '/charts/radar',
  name: '雷达图',
  component: ()=>import('../views/charts/radar')
},{
  path: '/charts/heatmap',
  name: '热力图',
  component: ()=>import('../views/charts/heatmap')
}]