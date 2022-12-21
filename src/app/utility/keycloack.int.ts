import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () =>
Promise<boolean> {

    return () =>
        keycloak.init({
            config: {
                url: 'http://127.0.0.1:8080',
                realm: 'elearning',
                clientId: 'angular'
            },
            initOptions: {
                onLoad: 'check-sso',
                checkLoginIframe: true                               
            },
            bearerExcludedUrls: []
        });
}