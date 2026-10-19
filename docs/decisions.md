---
id: decisions
title: Key Decisions
sidebar_position: 8
---

# Key Decisions

:::tip In short
Important decisions are recorded as **ADRs** (Architecture Decision Records): the problem, the options, the choice and why. A decision is never deleted; if it changes, a new ADR replaces it.
:::

## Decisions taken

| ADR | Decision | Why | Status |
|---|---|---|---|
| [0001](https://github.com/sonoraplay/main/blob/main/docs/adr/0001-arquitectura-base-aws.md) | AWS architecture at the lowest justifiable cost | Meets every course topic and requirement at the lowest price | 🟢 Accepted |
| [0002](https://github.com/sonoraplay/main/blob/main/docs/adr/0002-zona-horaria-dia-mes.md) | "Day" and "month" are measured in **UTC** | RN-04 already uses UTC; each play belongs to exactly one day and month | 🟢 Accepted |
| [0003](https://github.com/sonoraplay/main/blob/main/docs/adr/0003-duplicados-f1.md) | Catalog: **one row per track**, extra genres in a separate table | Plays are never split or counted twice | 🟢 Accepted |
| [0004](https://github.com/sonoraplay/main/blob/main/docs/adr/0004-esquema-eventos-f2.md) | Closed, versioned event format; duplicates removed by `event_id` | Zero lost or double-counted events | 🟢 Accepted |
| [0005](https://github.com/sonoraplay/main/blob/main/docs/adr/0005-umbrales-granjas.md) | Fraud thresholds (20 h, 70 % / 1,000 listeners, 5 accounts) and month-long exclusion | Delaying an honest payment costs less than paying fraud | 🟢 Accepted |
| [0006](https://github.com/sonoraplay/main/blob/main/docs/adr/0006-autenticacion-aislamiento-sellos.md) | Rights holders log in with **JWT**; other holders' data → 403 before reading the database | Simple, stateless, fully testable, no extra cost | 🟢 Accepted |
| [0007](https://github.com/sonoraplay/main/blob/main/docs/adr/0007-cierre-mes-ajustes-reliquidacion.md) | Published months are **never edited**; late data is paid as an adjustment; cent-exact rounding | Full history and totals that never exceed the pool | 🟢 Accepted |
| [0008](https://github.com/sonoraplay/main/blob/main/docs/adr/0008-pais-bolsa-dos-componentes.md) | Pool by **billing country**; **two parts** (subscription / advertising) | Revenue and plays stay in the same pool; free plays don't take paid money | 🟢 Accepted |
| [0020](https://github.com/sonoraplay/main/blob/main/docs/adr/0020-ventanas-encendido-aws.md) | AWS **off by default**; short test windows; on only in the final week | Cuts project cost from ~170 to ~30–40 USD | 🟢 Accepted |
| [0021](https://github.com/sonoraplay/main/blob/main/docs/adr/0021-f6-fuentes-tasas-cierre-propuesto.md) | Exchange rates from Frankfurter; weekend month-ends use the previous business day | Free, public source with the six currencies | 🟡 Proposed |

## Decisions still to be written

Each one is written inside the story that needs it.

<details>
<summary><strong>Pending ADRs (0009–0019)</strong></summary>

| ADR | Topic | Sprint |
|---|---|---|
| 0009 | AWS region (us-east-1 vs. sa-east-1) | S3 |
| 0010 | Internet exit: NAT instance vs. NAT Gateway | S3 |
| 0011 | Infrastructure as code with Terraform | S3 |
| 0012 | Compute: Fargate On-Demand, Fargate Spot and ARM64 | S3 |
| 0013 | RabbitMQ on EC2 vs. Amazon MQ | S3 |
| 0014 | Data lake format and partitioning (Parquet by year/month/country) | S3 |
| 0015 | Airflow on EC2 vs. managed Airflow (MWAA) | S4 |
| 0016 | Handling data skew in Spark | S5 |
| 0017 | CI/CD with OIDC and secrets in SSM | S5 |
| 0018 | ECS vs. EKS; EKS on only for its test and the demo | S5 |
| 0019 | Power BI access to the database through an SSM tunnel | S6 |

</details>

:::note Full record
[ADR register](https://github.com/sonoraplay/main/blob/main/docs/adr/README.md) in the code repository.
:::
