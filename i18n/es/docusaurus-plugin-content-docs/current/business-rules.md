---
id: business-rules
title: Reglas de negocio
sidebar_position: 4
---

# Reglas de negocio

:::tip En pocas palabras
Once reglas de negocio (**RN-01 a RN-11**) deciden qué se paga, a quién y cuánto. Todos los "días" y "meses" se miden en **UTC**.
:::

## Las reglas en lenguaje sencillo

### Qué reproducciones cuentan

| Regla | Qué dice |
|---|---|
| **RN-01 · 30 segundos** | Una reproducción es válida solo si se escucharon al menos **30 segundos continuos**. Exactamente 30 s es válida. Una pausa o un salto reinician el conteo; no se pueden sumar tramos separados. |
| **RN-02 · Tope diario** | Solo se pagan las **10 primeras reproducciones válidas** por usuario, pista y día UTC. |
| **RN-03 · Fraude** | Una cuenta se marca como posible **granja de reproducciones** si cumple cualquiera de tres señales (ver abajo). Todas sus reproducciones de ese mes quedan en revisión. |
| **RN-04 · Reproducciones offline** | Una reproducción offline pertenece al mes en que se escuchó si sincroniza antes del **día 2 del mes siguiente a las 23:59 UTC**. Si no, se paga como ajuste en el siguiente mes abierto. |

### Cómo se calcula el dinero

| Regla | Qué dice |
|---|---|
| **RN-05 · Bolsa** | Cada país tiene una bolsa mensual: el **52 %** de la suscripción neta más el **45 %** de los ingresos publicitarios, en USD con la tasa de cambio del último día del mes. |
| **RN-06 · Regalía** | Cada titular recibe: bolsa × su participación en las reproducciones válidas × su % contractual. |
| **RN-07 · Fecha del contrato** | Cada reproducción usa el % contractual **vigente el día de la reproducción**, aunque se liquide después. |
| **RN-08 · Países excluidos** | Si un contrato excluye el país donde ocurrió la reproducción, esa reproducción paga **0 %** y se registra un incidente. |
| **RN-10 · Planes familiares** | Un plan familiar es **un solo pago**. Todos los miembros cuentan en el país de facturación del titular de la cuenta. |

### Clientes y acceso

| Regla | Qué dice |
|---|---|
| **RN-09 · Churn** | Cancelar o no renovar cuenta como churn. **Cambiar de plan no es churn.** |
| **RN-11 · Privacidad** | Un titular puede ver **solo sus propios** reportes. Pedir los datos de otro titular devuelve "prohibido". |

## Señales de fraude (RN-03)

Una cuenta se marca si **cualquiera** de estas se cumple en el mes:

| Señal | Se marca cuando |
|---|---|
| Demasiada escucha | Más de **20 horas** en cualquier ventana móvil de 24 horas |
| Un artista pequeño | Más del **70 %** de sus reproducciones van a un artista con **menos de 1.000** oyentes en el mes |
| Dispositivo compartido | Usó un dispositivo compartido por **más de 5** cuentas |

Los valores justo en el límite (20 h, 70 %, 1.000 oyentes, 5 cuentas) **no** se marcan. Las reproducciones marcadas no se borran: si la revisión libera la cuenta, se pagan como ajuste el mes siguiente.

## Cómo se reparte la bolsa

La bolsa tiene **dos partes**, y cada una se reparte por separado:

| Parte | Dinero | Se reparte entre |
|---|---|---|
| Suscripción | 52 % de la suscripción neta | Reproducciones válidas de planes **pagos** |
| Publicidad | 45 % de los ingresos publicitarios | Reproducciones válidas del plan **gratuito** |

<details>
<summary><strong>Ejemplo</strong></summary>

Colombia tiene **100.000 USD** de suscripción y **20.000 USD** de publicidad. Un titular tiene el **5 %** de las reproducciones pagas, el **10 %** de las gratuitas y un contrato del **80 %**.

- Parte de suscripción: 52 % × 100.000 = 52.000 → 52.000 × 5 % = 2.600
- Parte de publicidad: 45 % × 20.000 = 9.000 → 9.000 × 10 % = 900
- Antes del contrato: 2.600 + 900 = 3.500 → × 80 % = **2.800,00 USD**

</details>

## Requisitos de calidad

| ID | Requisito |
|---|---|
| RNF-01 | La liquidación mensual termina en menos de una hora |
| RNF-02 | Lo pagado por país nunca supera la bolsa (± 0,01 USD) |
| RNF-03 | Cada monto se puede rastrear hasta su liquidación y sus reproducciones |
| RNF-04 | Cero eventos de reproducción perdidos |

## Preguntas abiertas y supuestos

El equipo envió **diez preguntas** al docente el 30 de septiembre de 2026. Mientras no haya respuesta, estos son **supuestos de trabajo**, no requisitos confirmados.

<details>
<summary><strong>Ver las diez preguntas (Q1–Q10)</strong></summary>

| # | Pregunta | Supuesto de trabajo |
|---|---|---|
| Q1 | ¿Una pausa antes de los 30 s reinicia el conteo? | Sí |
| Q2 | "Menos de 1.000 oyentes": ¿por día, mes o histórico? | Por mes |
| Q3 | ¿Se excluye la cuenta sospechosa por el día o por el mes? | Por todo el mes |
| Q4 | ¿Qué zona horaria define el "día" y el "mes"? | UTC |
| Q5 | Suscripción "neta": ¿neta de qué? | El monto de los pagos aprobados en F3; no se descuenta nada más |
| Q6 | Miembros de una familia en distintos países: ¿qué país recibe el ingreso? | El país de facturación de la cuenta (decisión del equipo) |
| Q7 | ¿El % del contrato puede cambiar por país? | Solo si el contrato lo dice explícitamente |
| Q8 | ¿Las reproducciones gratuitas comparten el dinero de suscripción? | No: dos partes separadas (decisión del equipo) |
| Q9 | ¿Se unifican las pistas duplicadas del catálogo? | Sí, una fila por ID de pista |
| Q10 | ¿Los 900.000 usuarios completos en la demo en la nube? | Un subconjunto configurable; el volumen completo es posible |

Q8 es la que más mueve el dinero y la primera que hay que confirmar.

</details>

:::note Registro completo
Análisis detallado: [ambiguedades-rn.md](https://github.com/sonoraplay/main/blob/main/docs/analisis/ambiguedades-rn.md) en el repositorio de código.
:::
