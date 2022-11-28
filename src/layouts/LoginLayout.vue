<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NIcon } from 'naive-ui'
import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5'
</script>

<template>
    <div class="login">
        <div class="container">
            <n-form label-placement="left">
                <n-form-item>
                    <n-input placeholder="请输入用户名">
                        <template #prefix>
                            <n-icon :component="PersonOutline" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item>
                    <n-input placeholder="请输入密码">
                        <template #prefix>
                            <n-icon :component="LockClosedOutline" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item>
                    <n-button type="primary" block>登录</n-button>
                </n-form-item>
            </n-form>
        </div>
    </div>
</template>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
}

.login .container {
    flex: 1;
    padding: 32px 12px;
    max-width: 384px;
    min-width: 320px;
    margin: 0 auto;
}
</style>