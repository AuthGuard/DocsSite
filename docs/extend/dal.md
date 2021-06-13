---
sidebar_position: 3
---

# Data Access Layer
The data access layer extension is the only required extension in order for AuthGuard to run. The others are optional. AuthGuard was designed with adaptability in mind, which is why it does not come with any database drivers with it. You are expected to have the implementation which connects it to whatever database you want to use.

## Data Access Interfaces
* AccountsRepository.java
* CredentialsAuditRepository.java
* PermissionsRepository.java
* AccountTokensRepository.java
* CredentialsRepository.java
* RolesRepository.java
* ApiKeysRepository.java
* SessionsRepository.java
* ApplicationsRepository.java
* OtpRepository.java

## Example
An example implementation which is used for the test distribution is an in-memory store.
```java
@Singleton
public class MockAccountsTokensRepository extends AbstractRepository<AccountTokenDO> implements AccountTokensRepository {

    @Override
    public CompletableFuture<Optional<AccountTokenDO>> getByToken(final String token) {
        return CompletableFuture.supplyAsync(() -> getRepo().values().stream()
                .filter(accountToken -> accountToken.getToken().equals(token))
                .findFirst());
    }
}
```
