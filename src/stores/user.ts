import { defineStore } from 'pinia';
import type { ParsedToken } from '@/types';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        token: '',
        parsedToken: undefined as ParsedToken | undefined,
    }),
    getters: {
        username: (state) => {
            return state.parsedToken ? state.parsedToken.name : '';
        },
        roles: (state) => {
            const resourceAccess = state.parsedToken?.resource_access;
            if (!resourceAccess) {
                return [];
            }
            return resourceAccess['pcc-client'].roles ?? [];
        },
        isPlayer(): boolean {
            return this.roles.includes('player') ?? false;
        },
        isCoach(): boolean {
            return this.roles.includes('coach') ?? false;
        },
    },
});
