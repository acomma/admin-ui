<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NIcon, FormValidationError, useMessage } from 'naive-ui'
import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5'
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '../store/login-user'

const loginUserStore = useLoginUserStore()
const message = useMessage()
const router = useRouter()
const formRef = ref()

const model = reactive({
    username: null,
    password: null,
})

const rules = {
    username: { required: true, message: '请输入用户名', trigger: 'blur' },
    password: { required: true, message: '请输入密码', trigger: 'blur' },
}

const handleLogin = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((errors: Array<FormValidationError>) => {
        if (!errors) {
            const { username, password } = model;
            const params = {
                username,
                password,
            }
            axios.post("/auth/login", params)
                .then((response) => {
                    const { code: errorCode, message: errorMessage } = response.data
                    if (errorCode !== 0) {
                        message.error(errorMessage || '登录失败')
                    } else {
                        const { data: { token: token, userId: userId } } = response.data
                        loginUserStore.setToken(token)
                        loginUserStore.setUserId(userId)
                        router.replace('/')
                    }
                })
        }
    })
}
</script>

<template>
    <div class="login">
        <div class="container">
            <n-form ref="formRef" :model="model" :rules="rules" label-placement="left">
                <n-form-item path="username">
                    <n-input v-model:value="model.username" placeholder="请输入用户名">
                        <template #prefix>
                            <n-icon :component="PersonOutline" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item path="password">
                    <n-input v-model:value="model.password" placeholder="请输入密码">
                        <template #prefix>
                            <n-icon :component="LockClosedOutline" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item>
                    <n-button type="primary" block @click="handleLogin">登录</n-button>
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