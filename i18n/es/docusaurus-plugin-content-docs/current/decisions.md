---
id: decisions
title: Decisiones clave
sidebar_position: 8
---

# Decisiones clave

:::tip En pocas palabras
Las decisiones importantes se registran como **ADR** (Architecture Decision Records): el problema, las opciones, la elección y el porqué. Una decisión nunca se borra; si cambia, un ADR nuevo la reemplaza.
:::

## Decisiones tomadas

| ADR | Decisión | Por qué | Estado |
|---|---|---|---|
| [0001](https://github.com/sonoraplay/main/blob/main/docs/adr/0001-arquitectura-base-aws.md) | Arquitectura en AWS al menor costo justificable | Cumple todos los temas del curso y los requisitos al menor precio | 🟢 Aceptado |
| [0002](https://github.com/sonoraplay/main/blob/main/docs/adr/0002-zona-horaria-dia-mes.md) | El "día" y el "mes" se miden en **UTC** | RN-04 ya usa UTC; cada reproducción pertenece a un solo día y un solo mes | 🟢 Aceptado |
| [0003](https://github.com/sonoraplay/main/blob/main/docs/adr/0003-duplicados-f1.md) | Catálogo: **una fila por pista**, los demás géneros en una tabla aparte | Las reproducciones nunca se dividen ni se cuentan dos veces | 🟢 Aceptado |
| [0004](https://github.com/sonoraplay/main/blob/main/docs/adr/0004-esquema-eventos-f2.md) | Formato de evento cerrado y versionado; duplicados eliminados por `event_id` | Cero eventos perdidos o contados dos veces | 🟢 Aceptado |
| [0005](https://github.com/sonoraplay/main/blob/main/docs/adr/0005-umbrales-granjas.md) | Umbrales de fraude (20 h, 70 % / 1.000 oyentes, 5 cuentas) y exclusión por todo el mes | Retrasar un pago honesto cuesta menos que pagar fraude | 🟢 Aceptado |
| [0006](https://github.com/sonoraplay/main/blob/main/docs/adr/0006-autenticacion-aislamiento-sellos.md) | Los titulares entran con **JWT**; datos de otro titular → 403 antes de leer la base | Simple, sin estado, se prueba completo y sin costo extra | 🟢 Aceptado |
| [0007](https://github.com/sonoraplay/main/blob/main/docs/adr/0007-cierre-mes-ajustes-reliquidacion.md) | Los meses publicados **nunca se editan**; los datos tardíos se pagan como ajuste; redondeo exacto al centavo | Historia completa y totales que nunca superan la bolsa | 🟢 Aceptado |
| [0008](https://github.com/sonoraplay/main/blob/main/docs/adr/0008-pais-bolsa-dos-componentes.md) | Bolsa por **país de facturación**; **dos partes** (suscripción / publicidad) | Ingresos y reproducciones quedan en la misma bolsa; lo gratuito no se lleva dinero pago | 🟢 Aceptado |
| [0020](https://github.com/sonoraplay/main/blob/main/docs/adr/0020-ventanas-encendido-aws.md) | AWS **apagado por defecto**; ventanas cortas de prueba; prendido solo la última semana | Baja el costo del proyecto de ~170 a ~30–40 USD | 🟢 Aceptado |
| [0021](https://github.com/sonoraplay/main/blob/main/docs/adr/0021-f6-fuentes-tasas-cierre-propuesto.md) | Tasas de cambio de Frankfurter; si el mes cierra en fin de semana, se usa el día hábil anterior | Fuente gratuita y pública con las seis monedas | 🟡 Propuesto |

## Decisiones por escribir

Cada una se escribe dentro de la historia que la necesita.

<details>
<summary><strong>ADR pendientes (0009–0019)</strong></summary>

| ADR | Tema | Sprint |
|---|---|---|
| 0009 | Región de AWS (us-east-1 frente a sa-east-1) | S3 |
| 0010 | Salida a internet: instancia NAT frente a NAT Gateway | S3 |
| 0011 | Infraestructura como código con Terraform | S3 |
| 0012 | Cómputo: Fargate On-Demand, Fargate Spot y ARM64 | S3 |
| 0013 | RabbitMQ en EC2 frente a Amazon MQ | S3 |
| 0014 | Formato y particionamiento del Data Lake (Parquet por año/mes/país) | S3 |
| 0015 | Airflow en EC2 frente a Airflow administrado (MWAA) | S4 |
| 0016 | Manejo del sesgo de datos (skew) en Spark | S5 |
| 0017 | CI/CD con OIDC y secretos en SSM | S5 |
| 0018 | ECS frente a EKS; EKS prendido solo para su prueba y la demo | S5 |
| 0019 | Acceso de Power BI a la base de datos por túnel SSM | S6 |

</details>

:::note Registro completo
[Registro de ADR](https://github.com/sonoraplay/main/blob/main/docs/adr/README.md) en el repositorio de código.
:::
