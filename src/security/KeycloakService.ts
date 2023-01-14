import Keycloak from 'keycloak-js';

// @ts-ignore
const keycloakInstance: Keycloak.KeycloakInstance = new Keycloak();

interface CallbackOneParam<T1 = void, T2 = void> {
    (param1: T1): T2;
}
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const login = (onAuthenticatedCallback: CallbackOneParam) => {
    keycloakInstance
        .init({ onLoad: 'login-required' })
        .then(function (authenticated: boolean) {
            authenticated ? onAuthenticatedCallback() : alert('non authenticated');
        })
        .catch((e: any) => {
            console.log(`keycloak init exception: ${e}`);
        });
};

const KeyCloakService = {
    login,
};

export default KeyCloakService;
