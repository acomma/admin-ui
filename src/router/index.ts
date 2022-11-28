import User from "../views/user/index.vue";
import Role from "../views/role/index.vue";
import Menu from "../views/menu/index.vue";
import MenuAction from "../views/menu-action/index.vue";
import BasicLayout from "../layouts/BasicLayout.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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

export default router