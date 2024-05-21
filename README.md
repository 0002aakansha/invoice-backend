# OAuth Authentication

This microservice handles OAuth authentication for an organisation using Microsoft's OAuth 2.0 authentication flow. The service includes two main functionalities: generating the OAuth redirect URL and verifying the OAuth response.

## Flow of OAuth Authentication
1. Generating the OAuth Redirect URL
    * **Endpoint: getOpenIdRedirect**
    * **Description:** This function generates the URL to which the user will be redirected to authenticate with their Microsoft account.
### GraphQL Query Example:
    ~~~
    query MyQuery{
        getOpenIdRedirect(organisation_name: "Example1") {
            status
            redirectTo
        }
    }
    ~~~
### Example Response
    ~~~
    {
        "data": {
            "getOpenIdRedirect": {
            "redirectTo": "https://login.microsoftonline.com/tenantId/oauth2/v2.0/authorize?client_id=client_idfa&response_type=code&redirect_uri=redirect_uri0&response_mode=query&scope=openid+email+profile&state=12345",
            "status": "Redirect"
            }
        }
    }
    ~~~
2. User Redirection and Login
    * **User Action:** The user follows the redirect URL and logs in with their credentials on the Microsoft login page.
    * **Receive Authorization Code:** After successful login, the user is redirected back to the specified redirect URI with an authorization code.
3. Verifying OAuth2 Response
    * **Endpoint: verifyOAuthResponse**
    * **Client Request:** The client sends the received authorization code and organization name to the verifyOAuthResponse mutation.
    * **Response:** The access token is returned to the client, indicating a successful authentication.
### GraphQL Query Example:
    ```
    mutation {
        verifyOAuthResponse(input: {organisation_name: "ExampleOrg", code: "authorization_code"}) {
            status
            token
        }
    }
    ```
## Testing with Postman

When testing these queries and mutations in Postman, ensure you include your AppSync API key in the headers. Here’s how you can set it up:

1. Open Postman and add a new request and select GraphQL.
2. Select the HTTP method (e.g., POST) and enter your GraphQL endpoint URL.
3. In the Headers tab, add a new key-value pair:
    * **Key:** x-api-key
    * **Value:** <Your AppSync API Key>
4. In the Query tab, enter your GraphQL query or mutation.