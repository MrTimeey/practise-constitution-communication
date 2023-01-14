export interface ParsedToken extends Keycloak.KeycloakTokenParsed {
    name?: String;
    preferred_username?: String;
    given_name?: String;
    family_name?: String;
}
