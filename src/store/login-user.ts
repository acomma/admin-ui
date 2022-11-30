import { defineStore } from 'pinia'

export interface LoginUser {
    token: string;
    userId: bigint;
}

export const useLoginUserStore = defineStore('loginUser', {
    state: (): LoginUser => {
        return {
            token: '',
            userId: 0n,
        }
    },
    getters: {
        getToken(): string {
            return this.token
        },
        getUserId(): bigint {
            return this.userId
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        setUserId(userId: bigint) {
            this.userId = userId
        }
    }
})
