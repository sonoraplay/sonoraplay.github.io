---
id: status
title: Status & Roadmap
sidebar_position: 10
---

# Status & Roadmap

:::warning Current status
The full flow **works locally with Docker**. The AWS design is accepted, but **the AWS environment has not been deployed yet**. Nothing on this portal is evidence of a live cloud deployment.
:::

## Sprints

| Sprint | Theme | Status |
|---|---|---|
| **1** | Discovery & design | ✅ Done (`v0.1.0-sprint1`) |
| **2** | Backend & local walking skeleton | ✅ Done (`v0.2.0-sprint2`) |
| **3** | Data sources and cloud foundations | 🔄 In progress |
| **4** | Orchestration (Airflow) | ⏳ Planned |
| **5** | Spark at scale, CI/CD, Kubernetes test | ⏳ Planned |
| **6** | Analytics, final architecture and demo | ⏳ Planned |

## What is done

<details>
<summary><strong>Sprint 1 · Discovery & design</strong></summary>

- Repository, CI and secret scanning.
- Business rule questions and working assumptions.
- Clean music catalog (F1) and rights holders.
- Subscription (F3) and contract (F4) test data.
- Playback event format (F2).
- Architecture v1 and the decision register.
- Validity rules (30 s, daily cap) and fraud detection.

</details>

<details>
<summary><strong>Sprint 2 · Backend & walking skeleton</strong></summary>

- Event simulator (F2).
- Contracts API and rights holder API.
- Offline attribution and clock correction.
- Revenue pool and settlement per country.
- End-to-end local demo with one command (Docker Compose).

</details>

<details>
<summary><strong>Sprint 3 · In progress</strong></summary>

- Advertising revenue (F5), exchange rates (F6) and countries (F7): first version merged; live checks and loading into PostgreSQL still pending.
- Cloud foundations (network, storage, database) with Terraform: in review.
- This documentation portal, in English and Spanish.

</details>

## Next steps

- Confirm the open business questions with the instructor (especially the two-part pool).
- Deploy the AWS foundations in short test windows.
- Move validation and settlement to Spark with Airflow scheduling.
- Measure real costs and confirm the estimate.
- Build the Power BI dashboards.
- Final demo, then destroy the environment with evidence.

:::note Full record
Project board and commits: [github.com/sonoraplay/main](https://github.com/sonoraplay/main).
:::
