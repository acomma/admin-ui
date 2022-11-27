<script setup lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NIcon, NAvatar } from "naive-ui"
import { SettingsOutline as SettingsIcon } from '@vicons/ionicons5'

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
                label: '菜单管理',
                key: 'menu'
            },
            {
                label: '角色管理',
                key: 'role'
            },
            {
                label: '用户管理',
                key: 'user'
            },
            {
                label: '操作管理',
                key: 'menu-action'
            }
        ]
    }
]
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
                    <n-avatar round src="../duck.svg" />
                </div>
            </n-layout-header>
            <n-layout-content class="content"></n-layout-content>
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