---
id: intro
slug: /
title: Welcome to SonoraPlay
sidebar_label: Home
sidebar_position: 1
---

# SonoraPlay Royalties

**SonoraPlay Royalties** is a data platform that decides which music plays are valid and, from them, calculates how much money each rights holder (labels, distributors and collecting societies) should receive every month.

It is built for **SonoraPlay Media**, a fictional music streaming service with about **900,000 subscribers in Latin America**.

:::tip At a glance
- **What it does:** turns millions of playback events into a fair, traceable monthly royalty report per rights holder.
- **Who uses it:** rights holders check their own reports; the SonoraPlay team runs the monthly settlement and analytics.
- **Where it runs:** locally with Docker today; designed to run on AWS at the lowest justifiable cost.
- **Project:** Project 08 of the Riwi data engineering program, built in six one-week sprints.
:::

## The problem in one minute

Every time someone presses play, the app sends events (start, pause, skip, end). SonoraPlay must pay rights holders **only for real, valid listening**, and it must do it in a way that is:

- **Fair:** fraud (stream farms, bots) must not take money from honest artists.
- **Correct:** every cent of the monthly revenue pool is accounted for.
- **Private:** each rights holder sees only their own data.
- **Traceable:** every payment can be traced back to the plays that justify it.

## Explore the documentation

| If you want to… | Go to |
|---|---|
| Understand the goals and scope | [Vision & Scope](./vision.md) |
| See how a play becomes a payment | [How It Works](./how-it-works.md) |
| Read the rules that decide what gets paid | [Business Rules](./business-rules.md) |
| See the cloud design | [Architecture](./architecture.md) |
| Learn about the data sources | [Data](./data.md) |
| Use or test the APIs | [APIs](./apis.md) |
| Know why things were decided | [Key Decisions](./decisions.md) |
| Run it on your computer | [Getting Started](./getting-started.md) |
| Check progress and next steps | [Status & Roadmap](./status.md) |
| Look up a term | [Glossary](./glossary.md) |

## Team

| Member | Main focus |
|---|---|
| Joshua Quintero | Technical lead, cloud infrastructure |
| María Clara Manjarrés | Business rules, data and documentation |
| Andrea Zárate | APIs, events and settlement |

:::note
This portal summarizes the project in plain language. The full technical records (in Spanish) live in the code repository: [github.com/sonoraplay/main](https://github.com/sonoraplay/main).
:::
