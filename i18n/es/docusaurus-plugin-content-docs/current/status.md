---
id: status
title: Estado y hoja de ruta
sidebar_position: 10
---

# Estado y hoja de ruta

:::warning Estado actual
El flujo completo **funciona en local con Docker**. El diseño en AWS está aceptado, pero **el entorno en AWS todavía no se ha desplegado**. Nada en este portal es evidencia de un despliegue real en la nube.
:::

## Sprints

| Sprint | Tema | Estado |
|---|---|---|
| **1** | Descubrimiento y diseño | ✅ Terminado (`v0.1.0-sprint1`) |
| **2** | Backend y esqueleto local | ✅ Terminado (`v0.2.0-sprint2`) |
| **3** | Fuentes de datos y base en la nube | 🔄 En curso |
| **4** | Orquestación (Airflow) | ⏳ Planeado |
| **5** | Spark a escala, CI/CD, prueba de Kubernetes | ⏳ Planeado |
| **6** | Analítica, arquitectura final y demo | ⏳ Planeado |

## Qué está hecho

<details>
<summary><strong>Sprint 1 · Descubrimiento y diseño</strong></summary>

- Repositorio, CI y detección de secretos.
- Preguntas sobre las reglas de negocio y supuestos de trabajo.
- Catálogo musical limpio (F1) y titulares.
- Datos de prueba de suscripciones (F3) y contratos (F4).
- Formato de los eventos de reproducción (F2).
- Arquitectura v1 y registro de decisiones.
- Reglas de validez (30 s, tope diario) y detección de fraude.

</details>

<details>
<summary><strong>Sprint 2 · Backend y esqueleto</strong></summary>

- Simulador de eventos (F2).
- API de contratos y API de titulares.
- Atribución offline y corrección de reloj.
- Bolsa y liquidación por país.
- Demo local de punta a punta con un solo comando (Docker Compose).

</details>

<details>
<summary><strong>Sprint 3 · En curso</strong></summary>

- Ingresos publicitarios (F5), tasas de cambio (F6) y países (F7): primera versión integrada; faltan las pruebas en vivo y la carga en PostgreSQL.
- Base en la nube (red, almacenamiento, base de datos) con Terraform: en revisión.
- Este portal de documentación, en inglés y español.

</details>

## Siguientes pasos

- Confirmar con el docente las preguntas abiertas (sobre todo la bolsa de dos partes).
- Desplegar la base en AWS en ventanas cortas de prueba.
- Llevar la validación y la liquidación a Spark, programadas con Airflow.
- Medir los costos reales y confirmar la estimación.
- Construir los tableros de Power BI.
- Demo final y destrucción del entorno con evidencia.

:::note Registro completo
Commits y avance: [github.com/sonoraplay/main](https://github.com/sonoraplay/main).
:::
