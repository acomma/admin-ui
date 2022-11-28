import User from "../views/user/index.vue";
import Role from "../views/role/index.vue";
import Menu from "../views/menu/index.vue";
import MenuAction from "../views/menu-action/index.vue";
import BasicLayout from "../layouts/BasicLayout.vue"
import LoginLayout from "../layouts/LoginLayout.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: LoginLayout
    },
    {
        path: '/',
        component: BasicLayout,
        children: [
            {
                path: '/user',
                component: User
            },
            {
                path: '/role',
                component: Role
            },
            {
                path: '/menu',
                component: Menu
            },
            {
                path: '/menu/action',
                component: MenuAction
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})

export default router