---
id: business-rules
title: Business Rules
sidebar_position: 4
---

# Business Rules

:::tip In short
Eleven business rules (**RN-01 to RN-11**) decide what is paid, to whom and how much. All "days" and "months" are measured in **UTC**.
:::

## The rules in plain language

### Which plays count

| Rule | What it says |
|---|---|
| **RN-01 · 30 seconds** | A play is valid only if the user listened at least **30 continuous seconds**. Exactly 30 s is valid. A pause or a jump resets the count; separate pieces cannot be added up. |
| **RN-02 · Daily cap** | Only the first **10 valid plays** per user, track and UTC day are paid. |
| **RN-03 · Fraud** | An account is flagged as a possible **stream farm** if it meets any of three signals (see below). All its plays that month are set aside for review. |
| **RN-04 · Offline plays** | An offline play belongs to the month it was heard if it syncs before **day 2 of the next month at 23:59 UTC**. Otherwise it is paid as an adjustment in the next open month. |

### How the money is calculated

| Rule | What it says |
|---|---|
| **RN-05 · Revenue pool** | Each country has a monthly pool: **52 %** of net subscription revenue plus **45 %** of advertising revenue, in USD using the exchange rate of the last day of the month. |
| **RN-06 · Royalty** | Each rights holder receives: pool × their share of valid plays × their contract percentage. |
| **RN-07 · Contract date** | Each play uses the contract percentage that was **valid on the day of the play**, even if it is settled later. |
| **RN-08 · Excluded countries** | If a contract excludes the country where the play happened, that play pays **0 %** and an incident is recorded. |
| **RN-10 · Family plans** | A family plan is **one payment**. All members count in the billing country of the account holder. |

### Customers and access

| Rule | What it says |
|---|---|
| **RN-09 · Churn** | Cancelling or not renewing counts as churn. **Changing plan is not churn.** |
| **RN-11 · Privacy** | A rights holder can see **only their own** reports. Asking for another holder's data returns "forbidden". |

## Fraud signals (RN-03)

An account is flagged if **any** of these is true in the month:

| Signal | Flagged when |
|---|---|
| Too much listening | More than **20 hours** in any rolling 24-hour window |
| One small artist | More than **70 %** of its plays go to one artist with **fewer than 1,000** monthly listeners |
| Shared device | It used a device shared by **more than 5** accounts |

Values exactly at the limit (20 h, 70 %, 1,000 listeners, 5 accounts) are **not** flagged. Flagged plays are not deleted: if a review clears the account, they are paid as an adjustment the following month.

## How the pool is split

The pool has **two parts**, each split separately:

| Part | Money | Split among |
|---|---|---|
| Subscription | 52 % of net subscription revenue | Valid plays from **paid** plans |
| Advertising | 45 % of advertising revenue | Valid plays from the **free** plan |

<details>
<summary><strong>Worked example</strong></summary>

Colombia has **100,000 USD** of subscription revenue and **20,000 USD** of advertising revenue. A rights holder has **5 %** of paid plays, **10 %** of free plays and an **80 %** contract.

- Subscription part: 52 % × 100,000 = 52,000 → 52,000 × 5 % = 2,600
- Advertising part: 45 % × 20,000 = 9,000 → 9,000 × 10 % = 900
- Before contract: 2,600 + 900 = 3,500 → × 80 % = **2,800.00 USD**

</details>

## Quality requirements

| ID | Requirement |
|---|---|
| RNF-01 | The monthly settlement finishes in under one hour |
| RNF-02 | The total paid per country never exceeds the pool (± 0.01 USD) |
| RNF-03 | Every amount can be traced to its settlement and plays |
| RNF-04 | Zero playback events lost |

## Open questions and assumptions

The team sent **ten questions** to the instructor on September 30, 2026. Until there is an answer, these are **working assumptions**, not confirmed requirements.

<details>
<summary><strong>See the ten questions (Q1–Q10)</strong></summary>

| # | Question | Working assumption |
|---|---|---|
| Q1 | Does a pause before 30 s reset the count? | Yes |
| Q2 | "Fewer than 1,000 listeners": per day, month or all time? | Per month |
| Q3 | Exclude a suspicious account for the day or the month? | The whole month |
| Q4 | Which time zone defines "day" and "month"? | UTC |
| Q5 | "Net" subscription revenue: net of what? | The approved payment amount in F3; nothing else deducted |
| Q6 | Family members in different countries: which country gets the revenue? | The billing country of the account (team decision) |
| Q7 | Can the contract percentage change by country? | Only if the contract says so explicitly |
| Q8 | Do free-plan plays share the subscription money? | No: two separate parts (team decision) |
| Q9 | Merge duplicate tracks in the catalog? | Yes, one row per track ID |
| Q10 | Full 900,000 users in the cloud demo? | A configurable subset; full volume possible |

Q8 has the biggest impact on money and is the first one to confirm.

</details>

:::note Full record
Detailed analysis: [ambiguedades-rn.md](https://github.com/sonoraplay/main/blob/main/docs/analisis/ambiguedades-rn.md) in the code repository.
:::
