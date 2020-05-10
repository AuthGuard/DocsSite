---
layout: page
title: Sending OTPs
permalink: /extend/case-studies/otp
nav_order: 2
parent: Case Studies
---

# Sending OTPs
If you decided to start using OTPs or passwordless, you are going to need to start sending those to your users via email or SMS. The naive solution would be implement a message subscriber which listens to the `otp` channel and then send those out. However, you are better off using a bridge to send those messages, [Kafka bridge](/extend/case-studies/kafka) for example. And then have another service listen to those and have a retry mechanism to handle failures.
