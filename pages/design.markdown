---
layout: page
title: Design
permalink: /design/
nav_order: 4
---
# Design
It is important to understand the fundmental parts of AuthGuard's design to be able to configure and extend it correctly. This document will go through the internal parts without talking about the exposed API.

## The Three Layers + 1
AuthGuard is implemented in three layers: API layer, service layer, and data access layer, with an extra messaging layer parallel to the service layer.

### API Layer
The outer most layer which exposes a REST API built using Javalin. Refer to the API documentation to the available endpoints and payloads

### Service Layer
This is where the internal logic resides.

### Data Access Layer
The layer which connects AuthGuard to data stores.

### Messaging
The messaging layer does not interact directly with any other layer. It resides parallel to the service layer and the two are connected through a message bus. Some parts othe service layer push events to specific channels and you can add components which subscribe to those channels and perform some other actions.

## Data Models
Since AuthGuard integrates with external components at two layers: API and data access, we opted for separating our models into three, each corresponding to a layer: Data Transfer Objects (DTO) for API layer, Business Object (BO) for service layer, and Data Object (DO) for data access layer.

Consumers of the API will deal with DTOs, data access implementations will deal with DOs, and event subscribers will deal BOs.

## Low-Level Exchange Service
The exchange service is the core of AuthGuard authentication system. It provides a flexible way of adding new forms of authentication with little effort. The exchange service defines any authentication/authorization action as exchange of tokens, and for the sake of simplicity everything is a token. So basic authorization header is still treated as a token, and so are one-time passwords. And then any authentication/authorization flow is defined as a sequence of exchanges. Here are a couple of examples.

### Login Session Example
Let's say your login flow is just users provide username and password, and we give them back a session ID. In this we can the pre-defined exchange `basic` to `session`. This exchange simply connects a basic authentication verifier with a session provider.

### Login with One-Time Password
If your flow is more complicated, let's say user logins in, we send back an OTP, then user provides the OTP, and we eventually send back an access token. This is simply defined as two exchanges in AuthGuard:
1. `basic` to `otp`
2. `otp` to `access_token`

## High-Level Authentication Steps
There are some endpoints provided which give you a shortcut to the exchange service. Those endpoints are
* `/authentication`: exchanges a basic token for whatever it is configured to generate
* `/otp`: exchanges an OTP for whatever it is configured to generate
* `/passwordless`: exchanges a passwordless token for whatever it is configured to generate
