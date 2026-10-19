---
id: vision
title: Visión y alcance
sidebar_position: 2
---

# Visión y alcance

:::tip En pocas palabras
Pagar a cada titular **lo correcto, solo por escucha real, cada mes**, con una plataforma segura, auditable y barata de operar.
:::

## Visión

SonoraPlay quiere un proceso de regalías en el que sellos y artistas puedan **confiar**: reglas claras, sin ajustes ocultos, protección contra el fraude y un reporte que muestre exactamente qué reproducciones se pagaron.

## Objetivos

| Objetivo | Cómo sabemos que se cumple |
|---|---|
| Pagar solo reproducciones válidas | Una reproducción cuenta solo con 30 segundos continuos y con un tope diario por usuario y pista |
| Frenar el fraude | Se detecta al menos el **95 %** de las granjas, con **menos del 2 %** de falsos positivos |
| No perder dinero en redondeos | Lo pagado por país nunca supera la bolsa (± 0,01 USD) |
| No perder eventos | Cero eventos perdidos entre la app y el Data Lake |
| Liquidar rápido | La liquidación mensual corre en **menos de una hora** |
| Proteger los datos | Un titular nunca puede ver los datos de otro |
| Conservar la historia | Un mes publicado nunca se modifica; las correcciones se agregan como registros nuevos |
| Gastar poco | El diseño en la nube usa la opción más barata que cumple cada requisito |

## ¿Para quién es?

| Usuario | Qué necesita |
|---|---|
| **Titulares de derechos** (sellos, distribuidoras, sociedades de gestión) | Consultar sus regalías del mes y las reproducciones que las respaldan, de forma segura |
| **Equipo financiero de SonoraPlay** | Ejecutar la liquidación mensual y cerrar el mes |
| **Analistas y gerencia de SonoraPlay** | Tableros de consumo, churn y regalías |
| **Equipo de ingeniería** | Una plataforma reproducible que se crea y destruye cuando se necesita |

## Alcance

<details>
<summary><strong>Dentro del alcance</strong></summary>

- Ingerir los eventos de reproducción de la app (simulados).
- Validar reproducciones y detectar fraude.
- Asignar las reproducciones offline al mes correcto.
- Calcular la bolsa mensual por país y repartirla entre los titulares.
- Una API segura para titulares y una API interna de contratos.
- Un Data Lake (Bronze / Silver / Gold) y una base de datos de reportes.
- Tableros de analítica (Power BI).
- Infraestructura como código (Terraform) en AWS.

</details>

<details>
<summary><strong>Fuera del alcance</strong></summary>

- Una app de música real o datos reales de usuarios (todo es simulado o público).
- Pagos reales a los titulares.
- Firewall de aplicaciones web, recuperación ante desastres en otra región y entorno de staging (documentados como posible trabajo futuro).
- Envío de correos a los titulares.

</details>

## Países

Argentina (AR), Brasil (BR), Chile (CL), Colombia (CO), México (MX) y Perú (PE).

## Supuestos de trabajo

Algunas reglas de negocio se pueden leer de más de una forma. El equipo envió diez preguntas al docente y, mientras responde, adoptó **supuestos de trabajo** explícitos para no frenar el trabajo. Están en [Reglas de negocio](./business-rules.md#preguntas-abiertas-y-supuestos).
