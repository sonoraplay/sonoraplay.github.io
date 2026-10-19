---
id: getting-started
title: Primeros pasos
sidebar_position: 9
---

# Primeros pasos

:::tip En pocas palabras
Con **Git** y **Docker**, un solo comando levanta la base de datos, carga los datos de prueba, genera eventos y arranca las dos APIs. No hace falta instalar Python.
:::

## 1. Descarga el código

```bash
git clone https://github.com/sonoraplay/main.git sonoraplay
cd sonoraplay
cp .env.example .env
```

En `.env`, cambia:

- `POSTGRES_PASSWORD` (usa la misma contraseña en `DATABASE_URL` y `TEST_DATABASE_URL`).
- `API_TITULARES_JWT_SECRET` por un valor aleatorio. La API de titulares **no arranca** con el valor de ejemplo. Para generarlo:

```bash
docker run --rm python:3.12.15-slim-bookworm python -c "import secrets; print(secrets.token_urlsafe(48))"
```

:::warning
Nunca subas `.env` al repositorio ni compartas sus valores.
:::

## 2. Levanta todo

```bash
docker compose up -d --build
docker compose ps -a
```

La primera vez tarda unos minutos. Al terminar, `postgres` y las dos APIs están **healthy**, y `seed` y `simulador` muestran **Exited (0)**.

| Servicio | Qué hace | Puerto |
|---|---|---|
| `postgres` | PostgreSQL 16 con las tablas del proyecto | 5432 |
| `seed` | Carga el catálogo (F1), las suscripciones (F3) y los contratos (F4) | — |
| `simulador` | Genera 100 eventos de reproducción | — |
| `api-contratos` | API de contratos | 8000 |
| `api-titulares` | API de titulares | 8001 |

Compruébalas:

```bash
curl http://localhost:8000/health
curl http://localhost:8001/health
```

## 3. Corre la demo de punta a punta

```bash
docker compose --profile esqueleto up --build
```

Los eventos pasan por las reglas de validez, la atribución offline y la liquidación de un país, y el resultado queda en la base de datos. El log termina con un resumen como este:

```text
Período: 2026-09   País de facturación: CO
Eventos F2: 100   Reproducciones: 38   Ajustes de meses anteriores: 0
Descartadas: duracion_insuficiente=4, tope_diario=1
Titular con mayor regalía: ... (2340.00 USD)
```

Los datos son deterministas (semilla 42): siempre salen los mismos números.

## 4. Consulta como un titular

Copia el ID del titular que aparece en el resumen y, en otra terminal:

```bash
TOKEN=$(docker compose exec -T api-titulares python -m sonoraplay.api_titulares.tokens --titular <uuid>)
curl -H "Authorization: Bearer $TOKEN" "http://localhost:8001/me/reportes?periodo=2026-09"
```

## Apagar y limpiar

```bash
docker compose down      # detiene y conserva los datos
docker compose down -v   # detiene y borra todos los datos
```

<details>
<summary><strong>Usar el catálogo completo de Kaggle o 900.000 usuarios</strong></summary>

Por defecto el seed usa una muestra pequeña (200 pistas, 50 titulares) y 10.000 usuarios.

1. Descarga el catálogo completo como `data/raw/dataset.csv`.
2. Agrega a `.env`:

   ```bash
   F1_ENTRADA=/datos/entrada/raw/dataset.csv
   F1_TITULARES=1500
   F3_MODO=completo
   ```

3. Empieza de nuevo con la base vacía: `docker compose down -v` y luego `docker compose up -d --build`.

</details>

:::note Registro completo
[README](https://github.com/sonoraplay/main/blob/main/README.md) y [esqueleto de punta a punta](https://github.com/sonoraplay/main/blob/main/docs/esqueleto.md) en el repositorio de código.
:::
