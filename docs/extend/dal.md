---
sidebar_position: 3
---

# Data Access Layer
The data access layer extension is the only required extension in order for AuthGuard to run. The 
others are optional. AuthGuard was designed with adaptability in mind, which is why it does not come 
with any database drivers with it. You are expected to have the implementation which connects it to 
whatever database you want to use.

## Data Access Interfaces
The data access layer is split into two parts: persistence, and cache. This allows you to have a 
different implementation for each one, e.g. MySQL for persistence and Redis for caching.

### Persistence Repositories
* Accounts
* CredentialsAudit
* Permissions
* Credentials
* Roles
* ApiKeys
* Applications
* ExchangeAttempts
* IdempotentRecord

### Cache Repositories
* OTP
* AccountTokens
* Sessions
* AccountLocks


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

## Implementation Guidelines
There are no special guidelines for implementing data access interfaces, except for accounts 
and credentials. It is the responsibility of the implementation to either check for duplicates 
before inserting/updating a document, or rely on a unqiue index of the database to do so. In 
case of duplicates, the implementation should throw `ServiceConflictException`.

### Indices
It is up to the implementation to decide if it wants to create database indices, or rely on 
them being created in some other way. If the implementation needs to create its own indices 
then it can do so by creating the appropertiate bootstrap steps. Check [Bootstrap Steps](/docs/extend/bootstrap) for more details.  
