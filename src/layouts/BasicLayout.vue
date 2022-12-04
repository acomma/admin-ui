<script setup lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NIcon, NAvatar, NDropdown } from "naive-ui"
import { SettingsOutline as SettingsIcon, LogOutOutline as LogoutIcon } from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
    {
        label: '系统管理',
        key: 'system',
        icon: renderIcon(SettingsIcon),
        children: [
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/menu'
                        }
                    },
                    { default: () => '菜单管理' }
                ),
                key: 'menu'
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/role'
                        }
                    },
                    { default: () => '角色管理' }
                ),
                key: 'role'
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/user'
                        }
                    },
                    { default: () => '用户管理' }
                ),
                key: 'user'
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/menu/action'
                        }
                    },
                    { default: () => '菜单操作' }
                ),
                key: 'menu-action'
            }
        ]
    }
]

const avatarOptions = [
    {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogoutIcon)
    }
]

const handleAvatarOptionSelect = (key: string | number) => {
    if (key === 'logout') {
        doLogout()
    }
}

const doLogout = () => {
    axios.post("/auth/logout", {})
        .then((response) => {
            localStorage.removeItem('token')
            router.replace({ path: '/login' })
        })
}
</script>

<template>
    <n-layout has-sider class="container">
        <n-layout-sider class="sider" bordered collapse-mode="width" :collapsed-width="64" :width="240"
            show-trigger="arrow-circle">
            <div class="log"></div>
            <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <n-layout>
            <n-layout-header bordered class="header">
                <div class="left"></div>
                <div class="right">
                    <n-dropdown :options="avatarOptions" @select="handleAvatarOptionSelect">
                        <n-avatar round src="../duck.svg" />
                    </n-dropdown>
                </div>
            </n-layout-header>
            <n-layout-content class="content">
                <router-view></router-view>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<style scoped>
.container {
    height: 100vh;
}

.container .sider .log {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
}

.container .header {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .header .left {
    display: flex;
    align-items: center;
}

.container .header .right {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.container .content {
    min-height: calc(100vh - 64px);
}
</style>