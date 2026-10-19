---
id: apis
title: APIs
sidebar_position: 7
---

# APIs

:::tip En pocas palabras
Dos APIs pequeñas hechas con **FastAPI**:
- **API de titulares** (pública): cada sello ve solo sus propios reportes de regalías.
- **API de contratos** (interna): le dice a la liquidación qué % contractual aplica.
:::

| | API de titulares | API de contratos |
|---|---|---|
| Quién la usa | Sellos, distribuidoras, sociedades de gestión | El proceso de liquidación (Spark) |
| Exposición | Pública, por el balanceador HTTPS | Solo red privada |
| Acceso | Token firmado (JWT) | Ninguno (no se llega desde fuera) |
| Puerto local | 8001 | 8000 |

## API de titulares

Permite a un titular consultar sus regalías del mes, con el ID de la liquidación y el número de reproducciones válidas que respaldan cada monto.

| Endpoint | Qué devuelve |
|---|---|
| `GET /me/reportes` | Tus reportes (recomendado). Filtros opcionales: `periodo` (`YYYY-MM`) y `pais` (p. ej. `CO`) |
| `GET /titulares/{titular_id}/reportes` | Lo mismo, por ID; el ID debe coincidir con tu token |
| `GET /health` | Estado del servicio y de la base de datos (sin login) |

**Reglas de seguridad**

- Toda petición necesita un token válido. Sin token, vencido o inválido → **401**.
- Pedir los datos de otro titular → **403**, incluso antes de leer la base de datos. Nunca se devuelven datos de otro titular (RN-11).
- La API siempre muestra la **última liquidación publicada** de cada mes.

## API de contratos

Responde una sola pregunta para la liquidación: *"¿Qué % aplica a este titular, en esta fecha, en este país?"*

| Endpoint | Qué devuelve |
|---|---|
| `GET /titulares/{titular_id}/porcentaje?fecha=YYYY-MM-DD` | El % aplicable. Opcionales: `track_id`, `pais` |
| `GET /titulares/{titular_id}/condiciones` | Todas las condiciones del contrato del titular |
| `GET /health` | Estado del servicio y de la base de datos |

**Reglas que aplica**

- El % vigente **en la fecha de la reproducción** (RN-07). Las fechas de inicio y fin son inclusivas.
- Si el país está **excluido**, responde `excluido: true` y `porcentaje: 0` (RN-08). Es una respuesta normal, no un error.
- Una condición específica de un país gana sobre la general, salvo que el país esté excluido.

## Pruébalas en local

Después de arrancar el proyecto ([Primeros pasos](./getting-started.md)), la documentación interactiva está en:

- API de contratos: `http://localhost:8000/docs`
- API de titulares: `http://localhost:8001/docs`

:::note Registros completos
[API de titulares](https://github.com/sonoraplay/main/blob/main/docs/servicios/api-titulares.md) · [API de contratos](https://github.com/sonoraplay/main/blob/main/docs/servicios/api-contratos.md) · [ADR-0006 autenticación](https://github.com/sonoraplay/main/blob/main/docs/adr/0006-autenticacion-aislamiento-sellos.md)
:::
