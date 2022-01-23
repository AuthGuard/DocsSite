---
sidebar_position: 11
---
# Multi-Tenancy

AuthGuard comes with support for multi-tenancy out-of-the-box. 
This is achieved through the concept of domains. A domain is 
logical tag which separated accounts, credentials, role, and 
permissions, and applications. Domains do not need to have 
persisted records in the database, and are defined on-the-fly 
by admins.

## Admin Client vs Auth Client
As we discussed in previous versions, there are two types of 
applications which can call AuthGuard: an admin client, and 
an auth client. Admin clients have unlimited access and can 
set domain values to whatever they want. Auth clients on the 
other hand, beside having access to a limited number of 
endpoints and having restrictions on them, can only act on 
their respective domains. 

## Global Domain
There is a special domain called the global domain which is 
used internally by AuthGuard. That domain is meant to be 
used only to hold admin accounts and applications, as well 
as related roles and permissions. That domain should not 
be used by other applications.

