import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/xian',
    component: Layout,
    redirect: '/xian/note',
    name: 'xian-note',
    meta: {
      title: '西安工业大学期末考试',
      icon: 'nested'
    },
    children: [
      {
        path: '/xian/note',
        component: () => import('@/views/xian/note/index'), // Parent router-view
        name: 'XianNote',
        meta: { title: '笔记' }
      },
      {
        path: '/xian/suanfa',
        component: () => import('@/views/xian/suanfa/index'),
        name: 'xian-suanfa',
        meta: { title: '算法与数据结构' }
      },
      {
        path: '/xian/cpp',
        component: () => import('@/views/xian/cpp/index'),
        name: 'xian-cpp',
        meta: { title: '面向对象技术与c++' }
      },
      {
        path: '/xian/jizu',
        component: () => import('@/views/xian/jizu/index'),
        name: 'xian-jizu',
        meta: { title: '计算机组成与体系结构考试' }
      },
      {
        path: '/xian/maoshe',
        component: () => import('@/views/xian/3qi/maoshe/index'),
        name: 'xian-maoshe',
        meta: { title: '毛社' }
      },
      {
        path: '/xian/huibian',
        component: () => import('@/views/xian/3qi/huibian/index'),
        name: 'xian-huibian',
        meta: { title: '汇编语言与微机接口' }
      },
      {
        path: '/xian/os',
        component: () => import('@/views/xian/3qi/os/index'),
        name: 'xian-os',
        meta: { title: '操作系统' }
      },
      {
        path: '/xian/sql',
        component: () => import('@/views/xian/3qi/sql/index'),
        name: 'xian-sql',
        meta: { title: '数据库原理及应用' }
      },
      {
        path: '/xian/chuantongwenhua',
        component: () => import('@/views/xian/4qi/chuantongwenhua/index'),
        name: 'xian-chuantongwenhua',
        meta: { title: '中国传统文化概论' }
      },
      {
        path: '/xian/qianrushixitong',
        component: () => import('@/views/xian/4qi/qianrushixitong/index'),
        name: 'xian-qianrushixitong',
        meta: { title: '嵌入式系统' }
      },
      {
        path: '/xian/dianpianji',
        component: () => import('@/views/xian/4qi/dianpianji/index'),
        name: 'xian-dianpianji',
        meta: { title: '单片机原理与应用' }
      },
      {
        path: '/xian/jisuanjitongxin',
        component: () => import('@/views/xian/4qi/jisuanjitongxin/index'),
        name: 'xian-jisuanjitongxin',
        meta: { title: '计算机通信与网络' }
      },
      {
        path: '/xian/ruanjiangongcheng',
        component: () => import('@/views/xian/4qi/ruanjiangongcheng/index'),
        name: 'xian-ruanjiangongcheng',
        meta: { title: '软件工程' }
      },
      {
        path: '/xian/xinxijiansuo',
        component: () => import('@/views/xian/5xueqi/xinxijiansuo/index'),
        name: 'xian-xinxijiansuo',
        meta: { title: '信息检索' }
      }
    ]
  },
  {
    path: '/xiantests',
    component: Layout,
    redirect: '/xiantests/note',
    name: 'xiantests',
    meta: {
      title: '西工大-测试题汇总',
      icon: 'nested'
    },
    children: [
      {
        path: '/xiantests/note',
        component: () => import('@/views/xiantests/note/index'), // Parent router-view
        name: 'xiantests-note',
        meta: { title: '笔记' }
      },
      {
        path: '/xiantests/os',
        component: () => import('@/views/xiantests/os/index'), // Parent router-view
        name: 'xiantests-os',
        meta: { title: '操作系统' }
      },
      {
        path: '/xiantests/sql',
        component: () => import('@/views/xiantests/sql/index'), // Parent router-view
        name: 'xiantests-sql',
        meta: { title: '数据库原理及应用' }
      },
      {
        path: '/xiantests/danpianji',
        component: () => import('@/views/xiantests/danpianji/index'), // Parent router-view
        name: 'xiantests-danpianji',
        meta: { title: '单片机原理与应用' }
      },
      {
        path: '/xiantests/chuantongwenhua',
        component: () => import('@/views/xiantests/chuantongwenhua/index'), // Parent router-view
        name: 'xiantests-chuantongwenhua',
        meta: { title: '中国传统文化概论' }
      },
      {
        path: '/xiantests/jisuanjitongxin',
        component: () => import('@/views/xiantests/jisuanjitongxin/index'), // Parent router-view
        name: 'xiantests-jisuanjitongxin',
        meta: { title: '计算机通信与网络' }
      },
      {
        path: '/xiantests/qianrushixitong',
        component: () => import('@/views/xiantests/qianrushixitong/index'), // Parent router-view
        name: 'xiantests-qianrushixitong',
        meta: { title: '嵌入式系统' }
      },
      {
        path: '/xiantests/ruanjiangongcheng',
        component: () => import('@/views/xiantests/ruanjiangongcheng/index'), // Parent router-view
        name: 'xiantests-ruanjiangongcheng',
        meta: { title: '软件工程' }
      },
      {
        path: '/xiantests/xinxijiansuo',
        component: () => import('@/views/xiantests/xinxijiansuo/index'), // Parent router-view
        name: 'xiantests-xinxijiansuo',
        meta: { title: '信息检索' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '示例', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '文档链接', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
