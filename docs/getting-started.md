---
id: getting-started
title: Getting Started
sidebar_position: 9
---

# Getting Started

:::tip In short
With **Git** and **Docker**, one command starts the database, loads test data, generates events and starts both APIs. No Python installation needed.
:::

## 1. Get the code

```bash
git clone https://github.com/sonoraplay/main.git sonoraplay
cd sonoraplay
cp .env.example .env
```

In `.env`, change:

- `POSTGRES_PASSWORD` (use the same password in `DATABASE_URL` and `TEST_DATABASE_URL`).
- `API_TITULARES_JWT_SECRET` to a random value. The rights holder API **will not start** with the example value. To generate one:

```bash
docker run --rm python:3.12.15-slim-bookworm python -c "import secrets; print(secrets.token_urlsafe(48))"
```

:::warning
Never commit `.env` or share its values.
:::

## 2. Start everything

```bash
docker compose up -d --build
docker compose ps -a
```

The first run takes a few minutes. When it finishes, `postgres` and both APIs are **healthy**, and `seed` and `simulador` show **Exited (0)**.

| Service | What it does | Port |
|---|---|---|
| `postgres` | PostgreSQL 16 with the project tables | 5432 |
| `seed` | Loads the catalog (F1), subscriptions (F3) and contracts (F4) | — |
| `simulador` | Generates 100 playback events | — |
| `api-contratos` | Contracts API | 8000 |
| `api-titulares` | Rights holder API | 8001 |

Check them:

```bash
curl http://localhost:8000/health
curl http://localhost:8001/health
```

## 3. Run the end-to-end demo

```bash
docker compose --profile esqueleto up --build
```

The events go through the validity rules, offline attribution and the settlement of one country, and the result is saved in the database. The log ends with a summary like this (the console output is in Spanish):

```text
Período: 2026-09   País de facturación: CO
Eventos F2: 100   Reproducciones: 38   Ajustes de meses anteriores: 0
Descartadas: duracion_insuficiente=4, tope_diario=1
Titular con mayor regalía: ... (2340.00 USD)
```

The data is deterministic (seed 42), so you get the same numbers every time.

## 4. Query as a rights holder

Copy the rights holder ID from the summary and, in another terminal:

```bash
TOKEN=$(docker compose exec -T api-titulares python -m sonoraplay.api_titulares.tokens --titular <uuid>)
curl -H "Authorization: Bearer $TOKEN" "http://localhost:8001/me/reportes?periodo=2026-09"
```

## Stop and clean up

```bash
docker compose down      # stop, keep data
docker compose down -v   # stop and delete all data
```

<details>
<summary><strong>Use the full Kaggle catalog or 900,000 users</strong></summary>

By default the seed uses a small sample (200 tracks, 50 rights holders) and 10,000 users.

1. Download the full catalog as `data/raw/dataset.csv`.
2. Add to `.env`:

   ```bash
   F1_ENTRADA=/datos/entrada/raw/dataset.csv
   F1_TITULARES=1500
   F3_MODO=completo
   ```

3. Start again with an empty database: `docker compose down -v` then `docker compose up -d --build`.

</details>

:::note Full record
[README](https://github.com/sonoraplay/main/blob/main/README.md) and [walking skeleton](https://github.com/sonoraplay/main/blob/main/docs/esqueleto.md) in the code repository.
:::
