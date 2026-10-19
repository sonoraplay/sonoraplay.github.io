---
id: vision
title: Vision & Scope
sidebar_position: 2
---

# Vision & Scope

:::tip In short
Pay every rights holder **the right amount, for real listening only, every month**, with a platform that is secure, auditable and cheap to run.
:::

## Vision

SonoraPlay wants a royalty process that labels and artists can **trust**: clear rules, no hidden adjustments, protection against fraud, and a report that shows exactly which plays were paid.

## Goals

| Goal | How we know it is met |
|---|---|
| Pay only valid plays | A play counts only after 30 continuous seconds, with a daily cap per user and track |
| Stop fraud | At least **95 %** of stream farms detected, with **less than 2 %** false positives |
| Never lose money in rounding | The total paid per country never exceeds the pool (± 0.01 USD) |
| Never lose events | Zero playback events lost between the app and the data lake |
| Settle fast | The monthly settlement runs in **under one hour** |
| Keep data private | A rights holder can never see another holder's data |
| Keep history | A published month is never changed; corrections are added as new records |
| Keep costs low | The cloud design uses the cheapest option that meets each requirement |

## Who is it for?

| User | What they need |
|---|---|
| **Rights holders** (labels, distributors, collecting societies) | Check their monthly royalties and the plays behind them, securely |
| **SonoraPlay finance team** | Run the monthly settlement and close the month |
| **SonoraPlay analysts and managers** | Dashboards on consumption, churn and royalties |
| **Engineering team** | A reproducible platform they can create and destroy on demand |

## Scope

<details>
<summary><strong>In scope</strong></summary>

- Ingesting playback events from the app (simulated).
- Validating plays and detecting fraud.
- Attributing offline plays to the right month.
- Building the monthly revenue pool per country and splitting it among rights holders.
- A secure API for rights holders and an internal API for contracts.
- A data lake (Bronze / Silver / Gold) and a reporting database.
- Analytics dashboards (Power BI).
- Cloud infrastructure as code (Terraform) on AWS.

</details>

<details>
<summary><strong>Out of scope</strong></summary>

- A real music app or real user data (all data is simulated or public).
- Real payments to rights holders.
- Web application firewall, disaster recovery in another region, staging environment (documented as possible future work).
- Sending emails to rights holders.

</details>

## Countries covered

Argentina (AR), Brazil (BR), Chile (CL), Colombia (CO), Mexico (MX) and Peru (PE).

## Working assumptions

Some business rules can be read in more than one way. The team sent ten questions to the instructor and, while waiting, adopted explicit **working assumptions** so work is not blocked. They are listed in [Business Rules](./business-rules.md#open-questions-and-assumptions).
