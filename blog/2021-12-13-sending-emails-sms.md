---
title: "Tutorial 4: Sending emails and text messages"
description: Configuring AuthGuard to send emails and text messages directly
slug: tutorial-email-sms
tags: [tutorial]
hide_table_of_contents: false
---

At some point, as part of your user authentication and registration 
process, you will want to send emails and/or text messages.
Whether it is for One-Time Passwords, magic login links, or 
verification links. AuthGuard can easily be configured to 
send emails and text messages to users directly. Alternatively,
you can also use a message bus bridge to handle sending them 
outside of AuthGuard but that is outside the scope of this 
tutorial.

In this tutorial, we will configure an AuthGuard distribution 
to make it send emails to users using an SMTP server. At the 
end we will also show an example of using a REST API instead 
of SMTP, as well as using SMS. 

<!--truncate-->
## Prerequisites
1. A standard AuthGuard distribution or a custom distribution 
with the email extension.

2. Follow the guideline for the [server setup](/docs/setup).

## Scenario
There are multiple scenarios where you would want to send emails 
to users. However, for this tutorial we will only cover passwordless 
login as an example. The same steps also apply to other scenarios 
as well.

## Test Setup
We are not going to set up an SMTP server ourselves, and instead 
we will use SendGrid SMTP relay. If you wish to just test locally, 
you can use a GreenMail server, or Python built-in `smtpd` server.

Since we are using SendGrid, we will need an API key. Refer to 
SendGrid's own documentation to learn how to obtain one.

## Plugins Overview
There are two plugins needed for this tutorial: the email plugin, 
and the JavaMail pluing. The email plugin will add the subscribers 
which will read the events and call an email provider to send emails.
The JavaMail plugin is the email provider which will take care 
of sending emails. JavaMail plugins supports multiple protocols, 
by virtue of using JavaMail library, but only SMTP will be used 
here.

## AuthGuard Configuration
Unlike other functionalities, sending emails and text messages, 
spans multiple components, and therefore require configuring 
each one independently.

### Event Message Bus
AuthGuard has an internal message bus which allows components 
to publish events for other ones to consume. This gives it a 
lot of flexibility but it also requires its own configuration.
The EMB requires channels and subscribers to be explicitly 
allowed, which is meant to control which messages are allowed 
to be published, and which subscribers are allowed to listen 
to them.

Since we only need to send passwordless tokens, we will only 
allow that.

```yaml
emb:
   subscribers:
      - com.nexblocks.authguard.external.email.subscribers.EmailPasswordlessSubscriber
   channels:
      - passwordless
```

### External Communication Channel
The second part which sending emails spans is the external 
communication channel. This locks which communications 
channels will be allowed, if any. This one is straightforward,
and we will only allow emails.

```yaml
external:
   email: true
```

### JavaMail Plugin
The third and final part of the puzzle is the JavaMail plugin 
itself, which will call the SMTP server to send emails. The 
plugin configuration itself is split into two parts: provider, 
and JavaMail. The provider part is for configuration exclusive 
to the provider built on top of JavaMail, while the other part 
is for configuting JavaMail itself. This gives the flexibility 
to configure the underlying directly as needed.

```yaml
mail:
   provider:
      username: apikey # SendGrid requires the username to be 'apikey' when using API keys
      password: "env:SENDGRID_KEY" # this will load it from environment variables
      fromAddress: noreply@yourwebsite.com # must be verified with SendGrid
      fromName: AuthGuard Tutorials
      templates:
         passwordless:
            file: emails/passwordless.hbs
            subject: Login Link
   javaMail:
      "mail.smtp.host": smtp.sendgrid.net
      "mail.smtp.port": 465
      "mail.debug": true # set to false for production
      "mail.smtp.auth": true # required to enable authentication
      "mail.smtp.ssl.enable": true
```

Most of the configuration parameters are explained in the comments 
above, but we need to clarify the role of `templates`. JavaMail 
plugin requires email templates to be provided for each email type.
There is no pre-defined set of types, those are set by whichever 
calls the email provider. You need to know those types and map 
them to templates.

As for the templates themselves, they are just basic handlebars 
templates. AuthGuard will not read the templates from a database, 
and a file path is required.

The `javaMail` part of the configuration is free-form key-value 
pairs. All properties defined here are passed to JavaMail as is.
Refer to JavaMail documentation to learn more about its configuration.


## Test Email
To trigger that email, all you need to do is trigger a passwordless
login. Simply send a POST request to `/auth/exchange?from=basic&to=passwordless` 
with the following body

```json
{
	"identifier": "<user identifier>"
}
```

An email will be sent to the primary email address of the account 
associated with that identifier. 
```json
{
   "email": {
      "email": "<user email>"
   }
}
```

## Using Third-Party API
It is also possible to send emails using third-party APIs 
instead of using standard protocols such as SMTP. We can 
achieve the same result by using SendGrid plugin. If you 
wish to use a custom provider then you will need to remove 
the standard one; only one email provider can be used.

The configuration in that case will be something like:
```yaml
sendgrid:
   apiKeyVariable: SENDGRID_KEY
   fromEmailAddress: noreply@yourwebsite.com
   emailTemplates:
      passwordless: id_of_sendgrid_template
```

Here we no longer maintain the templates, and we just 
reference templates created on SendGrid directly.

## Text Messages
Unlike emails, there is no universal, or standard, way 
to send text messages. As a result, reliance on third-party 
APIs is required. To send text messages, you will have 
to create your own plugin which use whatever external service 
you need. You can use the SendGrid plugin as a starting 
point.

