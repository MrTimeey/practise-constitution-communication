import Keycloak from 'keycloak-js';
import { useUserStore } from '@/stores/user';

const keycloakInstance: Keycloak.KeycloakInstance = Keycloak();

const login = (onAuthenticatedCallback: Function) => {
    keycloakInstance
        .init({ onLoad: 'login-required' })
        .then(function (authenticated: boolean) {
            if (!authenticated) {
                alert('non authenticated');
                return;
            }
            const userStore = useUserStore();
            userStore.token = keycloakInstance.token ? keycloakInstance.token : '';
            userStore.parsedToken = keycloakInstance.tokenParsed ? keycloakInstance.tokenParsed : {};
            console.log(keycloakInstance.tokenParsed);
            console.log(userStore.roles, userStore.isPlayer);
            onAuthenticatedCallback();
        })
        .catch((e: any) => {
            console.log(`keycloak init exception: ${e}`);
        });
};

const KeyCloakService = {
    login,
};

export default KeyCloakService;
