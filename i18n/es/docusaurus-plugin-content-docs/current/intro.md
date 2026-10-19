---
id: intro
slug: /
title: Bienvenida a SonoraPlay
sidebar_label: Inicio
sidebar_position: 1
---

# SonoraPlay Regalías

**SonoraPlay Regalías** es una plataforma de datos que decide qué reproducciones de música son válidas y, con ellas, calcula cuánto dinero debe recibir cada titular de derechos (sellos, distribuidoras y sociedades de gestión) cada mes.

Está hecha para **SonoraPlay Media**, un servicio de streaming de música ficticio con unos **900.000 suscriptores en Latinoamérica**.

:::tip De un vistazo
- **Qué hace:** convierte millones de eventos de reproducción en un reporte mensual de regalías justo y trazable para cada titular.
- **Quién la usa:** los titulares consultan sus propios reportes; el equipo de SonoraPlay ejecuta la liquidación mensual y la analítica.
- **Dónde corre:** hoy en local con Docker; diseñada para AWS al menor costo justificable.
- **Proyecto:** Proyecto 08 del programa de ingeniería de datos de Riwi, en seis sprints de una semana.
:::

## El problema en un minuto

Cada vez que alguien da play, la app envía eventos (inicio, pausa, salto, fin). SonoraPlay debe pagar a los titulares **solo por escucha real y válida**, y hacerlo de forma:

- **Justa:** el fraude (granjas de reproducciones, bots) no puede quitarle dinero a los artistas honestos.
- **Correcta:** cada centavo de la bolsa mensual queda repartido.
- **Privada:** cada titular ve solo sus datos.
- **Trazable:** cada pago se puede rastrear hasta las reproducciones que lo justifican.

## Recorre la documentación

| Si quieres… | Ve a |
|---|---|
| Entender los objetivos y el alcance | [Visión y alcance](./vision.md) |
| Ver cómo una reproducción se convierte en un pago | [Cómo funciona](./how-it-works.md) |
| Leer las reglas que deciden qué se paga | [Reglas de negocio](./business-rules.md) |
| Ver el diseño en la nube | [Arquitectura](./architecture.md) |
| Conocer las fuentes de datos | [Datos](./data.md) |
| Usar o probar las APIs | [APIs](./apis.md) |
| Saber por qué se decidió cada cosa | [Decisiones clave](./decisions.md) |
| Ejecutarlo en tu computador | [Primeros pasos](./getting-started.md) |
| Ver el avance y los siguientes pasos | [Estado y hoja de ruta](./status.md) |
| Buscar un término | [Glosario](./glossary.md) |

## Equipo

| Integrante | Enfoque principal |
|---|---|
| Joshua Quintero | Líder técnico, infraestructura en la nube |
| María Clara Manjarrés | Reglas de negocio, datos y documentación |
| Andrea Zárate | APIs, eventos y liquidación |

:::note
Este portal resume el proyecto en lenguaje sencillo. Los registros técnicos completos están en el repositorio de código: [github.com/sonoraplay/main](https://github.com/sonoraplay/main).
:::
