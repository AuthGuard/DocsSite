---
sidebar_position: 6
---

# API Routes
Beside the pre-defined API endpoints, extensions can bring their own routes 
as well. 

## Implementing API Route
AuthGuard uses Javalin as its web library. Familiarize yourself with Javalin 
route handler to know about them. Once you are ready, you can easily define 
you own API routes by implementing the `ApiRoute` interface.

```java
public class OAuthRoute implements ApiRoute {
    private final OAuthService oAuthService;

    @Inject
    public OAuthRoute(final OAuthService oAuthService) {
        this.oAuthService = oAuthService;
    }

    @Override
    public String getPath() {
        return "custom"; // the root path (must be a single part, can't be custom/other for example)
    }

    @Override
    public void addEndpoints() {
        get("/my/endpoint", this::endpointHandler);
    }

    void endpointHandler(final Context context) {
        // process request
    }
}
```

The endpoint will be available on the path `GET /custom/my/endpoint`.
