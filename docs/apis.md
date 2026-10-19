---
id: apis
title: APIs
sidebar_position: 7
---

# APIs

:::tip In short
Two small APIs built with **FastAPI**:
- **Rights holder API** (public): each label sees only its own royalty reports.
- **Contracts API** (internal): tells the settlement which contract percentage applies.
:::

| | Rights holder API | Contracts API |
|---|---|---|
| Who uses it | Labels, distributors, collecting societies | The settlement job (Spark) |
| Exposure | Public, through the HTTPS load balancer | Private network only |
| Login | Signed token (JWT) | None (not reachable from outside) |
| Local port | 8001 | 8000 |

## Rights holder API

Lets a rights holder read their monthly royalties, with the settlement ID and the number of valid plays behind every amount.

| Endpoint | What it returns |
|---|---|
| `GET /me/reportes` | Your reports (recommended). Optional filters: `periodo` (`YYYY-MM`) and `pais` (e.g. `CO`) |
| `GET /titulares/{titular_id}/reportes` | Same, by ID; the ID must match your token |
| `GET /health` | Service and database status (no login) |

**Security rules**

- Every request needs a valid token. Missing, expired or invalid token → **401**.
- Asking for another rights holder's data → **403**, before the database is even read. No data from another holder is ever returned (RN-11).
- The API always shows the **latest published** settlement for each month.

## Contracts API

Answers one question for the settlement: *"Which percentage applies to this rights holder, on this date, in this country?"*

| Endpoint | What it returns |
|---|---|
| `GET /titulares/{titular_id}/porcentaje?fecha=YYYY-MM-DD` | The applicable percentage. Optional: `track_id`, `pais` |
| `GET /titulares/{titular_id}/condiciones` | All contract conditions of the holder |
| `GET /health` | Service and database status |

**Rules it applies**

- The percentage valid **on the date of the play** (RN-07). Start and end dates are inclusive.
- If the country is **excluded**, it answers `excluido: true` and `porcentaje: 0` (RN-08). This is a normal answer, not an error.
- A country-specific condition wins over the general one, unless the country is excluded.

## Try them locally

After starting the project ([Getting Started](./getting-started.md)), interactive docs are available at:

- Contracts API: `http://localhost:8000/docs`
- Rights holder API: `http://localhost:8001/docs`

:::note Full records
[Rights holder API](https://github.com/sonoraplay/main/blob/main/docs/servicios/api-titulares.md) · [Contracts API](https://github.com/sonoraplay/main/blob/main/docs/servicios/api-contratos.md) · [ADR-0006 authentication](https://github.com/sonoraplay/main/blob/main/docs/adr/0006-autenticacion-aislamiento-sellos.md)
:::
