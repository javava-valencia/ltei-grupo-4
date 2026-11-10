---
version: alpha
name: jv
description: Sistema de diseño del portafolio de Javier Valencia (jv). Alegre, orgánico y extrovertido; formas redondeadas, mucho aire y un contraste claro entre el verde profundo y el fondo hueso.

# Los valores marcados con "⚠️ REVISAR" no venían en DESIGN.docx y se completaron
# con un valor razonable. Están resumidos al final, en "Pendientes de revisión".

colors:
  primary: "#004804"          # Verde fuerte · color principal
  on-primary: "#FFF8EB"       # Hueso: texto de cuerpo sobre verde fuerte
  secondary: "#ADF3AF"        # Verde claro · títulos, bordes y botones sobre verde fuerte
  on-secondary: "#004804"     # Verde fuerte sobre verde claro
  tertiary: "#FF1542"         # Rojo · acento (botones en hueso, hover, enlace activo)
  on-tertiary: "#FFF8EB"      # Hueso sobre rojo (botón en hover)
  neutral: "#FFF8EB"          # Hueso · base neutra cálida
  surface: "{colors.neutral}"       # Fondo del sitio, del header y de las secciones claras
  on-surface: "#111111"             # Casi negro · texto de cuerpo sobre hueso
  surface-inverse: "{colors.primary}"     # Fondo del hero y de las secciones oscuras
  on-surface-inverse: "{colors.on-primary}" # Texto de cuerpo sobre verde fuerte
  surface-soft: "#EAF7E4"     # ⚠️ REVISAR: fondo "suave" de los recuadros rellenos (no venía el color)

typography:
  display:                    # Título del hero · se escribe en MAYÚSCULAS
    fontFamily: Urbanist
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05          # ⚠️ REVISAR
    letterSpacing: 0.01em     # ⚠️ REVISAR
  display-mobile:
    fontFamily: Urbanist
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1           # ⚠️ REVISAR
    letterSpacing: 0.01em     # ⚠️ REVISAR
  heading:                    # Título de sección · MAYÚSCULAS
    fontFamily: Urbanist
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1           # ⚠️ REVISAR
    letterSpacing: 0.01em     # ⚠️ REVISAR
  heading-mobile:
    fontFamily: Urbanist
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15          # ⚠️ REVISAR
    letterSpacing: 0.01em     # ⚠️ REVISAR
  subheading:
    fontFamily: Urbanist
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.3           # ⚠️ REVISAR
  title-card:                 # Puesto en las tarjetas de experiencia
    fontFamily: Urbanist
    fontSize: 22px            # ⚠️ REVISAR: solo se indicó "Urbanist Bold"
    fontWeight: 700
    lineHeight: 1.25          # ⚠️ REVISAR
  body:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6           # ⚠️ REVISAR
  body-mobile:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6           # ⚠️ REVISAR
  label:                      # Etiquetas, categorías y pies de foto · MAYÚSCULAS
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4           # ⚠️ REVISAR
    letterSpacing: 0.06em     # ⚠️ REVISAR
  meta:                       # Lugar y fecha en experiencia ("Inter pequeña")
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400           # ⚠️ REVISAR: no se indicó el peso
    lineHeight: 1.4           # ⚠️ REVISAR
  button:                     # MAYÚSCULAS · mínimo 19px
    fontFamily: Urbanist
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1             # ⚠️ REVISAR
    letterSpacing: 0.04em     # ⚠️ REVISAR

spacing:
  unit: 8px                   # Unidad base: todo el espaciado es múltiplo de 8
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  section: 120px              # Separación vertical entre secciones (computadora)
  section-mobile: 64px        # Separación vertical entre secciones (celular)
  container: 1200px           # Ancho máximo del contenido, centrado
  gutter: 24px                # ⚠️ REVISAR: margen lateral y espacio entre tarjetas
  touch-target: 44px          # Tamaño mínimo de botones e íconos

rounded:
  sm: 16px                    # Imágenes dentro de tarjetas (esquinas anidadas)
  md: 24px                    # Tarjetas, recuadros de información y fotos
  full: 9999px                # Botones píldora, círculos de íconos, números y pasos

components:
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    height: 80px              # ⚠️ REVISAR
    padding: "{spacing.md}"
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.label}"   # ⚠️ REVISAR: no se indicó el estilo de los enlaces
    padding: "{spacing.xs}"
  nav-link-hover:
    textColor: "{colors.tertiary}"
  nav-link-active:
    textColor: "{colors.tertiary}"
  section-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    padding: "{spacing.section}"
  section-dark:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.body}"
    padding: "{spacing.section}"
  hero:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    padding: "{spacing.section}"
  hero-title:
    textColor: "{colors.on-primary}"   # ⚠️ REVISAR: hueso o verde claro (no se especificó)
    typography: "{typography.display}"
  section-title-light:
    textColor: "{colors.primary}"
    typography: "{typography.heading}"
  section-title-dark:
    textColor: "{colors.secondary}"
    typography: "{typography.heading}"
  subtitle-light:
    textColor: "{colors.primary}"
    typography: "{typography.subheading}"
  subtitle-dark:
    textColor: "{colors.secondary}"
    typography: "{typography.subheading}"
  button-light:               # Píldora con borde rojo de 2px, sin relleno
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"   # ⚠️ REVISAR: relleno horizontal
    height: "{spacing.touch-target}"
  button-light-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  button-dark:                # Píldora con borde verde claro de 2px, sin relleno
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"   # ⚠️ REVISAR
    height: "{spacing.touch-target}"
  button-dark-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  info-box-outlined:          # Fondo igual a la sección + borde de 2px verde
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"   # ⚠️ REVISAR
  info-box-filled:            # Fondo de color suave, sin borde
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"   # ⚠️ REVISAR
  card-project:               # Borde de 2px verde fuerte · 3 por fila
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"   # ⚠️ REVISAR
  card-project-image:
    rounded: "{rounded.sm}"
  card-project-category:
    textColor: "{colors.primary}"
    typography: "{typography.label}"
  card-experience:            # Borde de 2px verde
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"   # ⚠️ REVISAR
  card-experience-title:
    textColor: "{colors.primary}"
    typography: "{typography.title-card}"
  card-experience-meta:
    textColor: "{colors.on-surface}"
    typography: "{typography.meta}"
  icon-circle:                # Íconos de redes, números y pasos
    backgroundColor: "{colors.secondary}"   # ⚠️ REVISAR: colores de reposo y hover del círculo
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 48px                # ⚠️ REVISAR: mínimo 44px
  icon-circle-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
  photo:
    rounded: "{rounded.md}"
---

## Overview

El portafolio de **jv** es alegre, orgánico y extrovertido. Junta tres gustos: el diseño orgánico, los contrastes fuertes y el minimalismo. Por eso usa formas suaves y redondeadas, mucho aire y un contraste claro entre el verde profundo y el fondo hueso. Nace como proyecto universitario, pero está pensado para reclutadores y clientes: quien lo recorra debe sentir una página orgánica e innovadora. **El diseño luce los proyectos, no compite con ellos.**

**La marca.** `jv` es un logotipo: un monograma caligráfico de trazo continuo, hecho a mano como una firma, que forma las letras «jv» (de Javier Valencia). No hay un símbolo aparte: el propio trazo es la marca. Sus curvas y su línea de grosor uniforme son el origen de todo lo orgánico del sistema. Tiene dos versiones con los mismos dos verdes, invertidos:

- **Versión oscura:** trazo verde claro (`{colors.secondary}`) sobre fondo verde fuerte (`{colors.primary}`).
- **Versión clara:** trazo verde fuerte (`{colors.primary}`) sobre fondo verde claro (`{colors.secondary}`).

**Uso del nombre.**

- **jv** es la marca: el logotipo y la firma visual del portafolio.
- **Javier Valencia** es el nombre formal: va en el CV, en la presentación formal y cuando el tono es serio. En el CV siempre aparece Javier Valencia.
- **jav** es el trato informal, por ejemplo en un saludo o en un tono cercano.

**Estructura.** Cinco secciones: Inicio, Sobre mí, Proyectos, Experiencia y Contacto. En todo el sitio se repiten los recuadros de información con esquinas redondeadas, la alternancia de secciones en hueso y en verde fuerte, las animaciones suaves y los cambios de color al pasar el cursor.

## Colors

La paleta se construye sobre dos verdes de marca, un rojo de acento y una base neutra cálida. **Todos los colores son planos: no se usa ningún degradado.**

- **Verde fuerte · `{colors.primary}` (#004804):** color principal. Títulos en las secciones claras, fondo de las secciones oscuras y del hero, y bordes de tarjetas.
- **Verde claro · `{colors.secondary}` (#ADF3AF):** títulos, bordes y botones cuando están sobre verde fuerte. Nunca como texto sobre hueso.
- **Rojo · `{colors.tertiary}` (#FF1542):** acento. Botones en secciones claras, hover y sección activa de los enlaces. Se usa con moderación.
- **Hueso · `{colors.neutral}` (#FFF8EB):** fondo base del sitio y del header (`{colors.surface}`), y texto de cuerpo sobre verde fuerte (`{colors.on-primary}`).
- **Casi negro · `{colors.on-surface}` (#111111):** texto de cuerpo sobre hueso. No se usa negro puro.
- **Verde suave · `{colors.surface-soft}` (#EAF7E4):** fondo de los recuadros rellenos. ⚠️ REVISAR: este color no venía en el documento; es una propuesta.

**Combinaciones permitidas.** Las secciones alternan entre fondo hueso y fondo verde fuerte, y cada una tiene su regla:

| Sección | Títulos | Cuerpo | Botones |
| --- | --- | --- | --- |
| Hueso (`{colors.surface}`) | Verde fuerte | Casi negro | Rojo |
| Verde fuerte (`{colors.surface-inverse}`) | Verde claro | Hueso | Verde claro |

**Combinaciones prohibidas.**

- **Verde claro sobre hueso:** casi no se ve.
- **Rojo sobre verde fuerte:** no tiene contraste suficiente y los dos colores «vibran» juntos.

**Nota de contraste.** El rojo sobre hueso tiene un contraste aproximado de 3.7:1. Basta para texto grande (el mínimo es 3:1), como el texto de los botones (19px Bold) o los enlaces del header, pero no para texto de cuerpo. Por eso el rojo nunca se usa en párrafos.

## Typography

Dos familias, ambas sans serif y de licencia libre (Google Fonts), con sus archivos incluidos en el proyecto.

- **Urbanist** es la fuente de títulos: geométrica, con curvas muy redondas que acompañan el trazo del logo.
- **Inter** es la fuente de lectura: neutra, clara y muy legible en pantalla.

La jerarquía se basa en el **contraste entre pesos**: los títulos van pesados (Bold) y los subtítulos ligeros (Light), justo debajo, para que se note la diferencia.

| Nivel | Token | Familia | Tamaño | Peso | Mayúsculas |
| --- | --- | --- | --- | --- | --- |
| Título display (hero) | `{typography.display}` | Urbanist | 64px | Bold | Sí |
| Título de sección | `{typography.heading}` | Urbanist | 44px | Bold | Sí |
| Subtítulo | `{typography.subheading}` | Urbanist | 28px | Light | No |
| Título de tarjeta | `{typography.title-card}` | Urbanist | 22px ⚠️ | Bold | No |
| Cuerpo de texto | `{typography.body}` | Inter | 18px | Regular | No |
| Etiquetas, categorías y pies de foto | `{typography.label}` | Inter | 14px | Medium | Sí |
| Lugar y fecha | `{typography.meta}` | Inter | 14px | Regular ⚠️ | No |
| Texto de botones | `{typography.button}` | Urbanist | 19px o más | Bold | Sí |

En celular, el título display baja a 40px (`{typography.display-mobile}`), el de sección a 32px (`{typography.heading-mobile}`) y el cuerpo a 16px (`{typography.body-mobile}`).

Los interlineados y los espaciados entre letras del front matter son propuestas (⚠️ REVISAR): el documento original no los indicaba.

## Layout

El espaciado se basa en una **unidad de 8px** (`{spacing.unit}`): todos los márgenes y separaciones son múltiplos de 8. El contenido tiene un **ancho máximo de 1200px** (`{spacing.container}`), centrado, y las secciones se separan **120px** verticales en computadora (`{spacing.section}`). Hay mucho aire alrededor de títulos, fotos y tarjetas: el contenido nunca va apretado.

- **Header:** fijo arriba (sticky), siempre visible, con fondo hueso y los enlaces Inicio, Sobre mí, Proyectos, Experiencia y Contacto.
- **Inicio (hero):** fondo verde fuerte con el logo `jv` y el nombre. Más abajo aparece una foto y empieza la presentación personal.
- **Fondos alternados:** unas secciones van en hueso y otras en verde fuerte, para que haya contraste al recorrer la página.
- **Proyectos:** cuadrícula de tarjetas. Cada proyecto abre su propia página, para poder compartir el enlace directo a un trabajo.

**Comportamiento responsivo.** El diseño se adapta sin perder lo orgánico ni la legibilidad.

| Pantalla | Columnas de proyectos | Separación entre secciones | Otros |
| --- | --- | --- | --- |
| Celular | 1 (tarjetas apiladas) | 64px (`{spacing.section-mobile}`) | Menú hamburguesa; en el hero, logo, nombre y foto van uno debajo del otro |
| Tablet | 2 | ⚠️ REVISAR (se propone 96px) | — |
| Computadora | 3 | 120px (`{spacing.section}`) | Ancho máximo de 1200px centrado |

Los botones e íconos miden **mínimo 44px** (`{spacing.touch-target}`) para tocarlos cómodamente. Los puntos de quiebre no venían en el documento; se proponen 768px (tablet) y 1024px (computadora) ⚠️ REVISAR.

## Elevation & Depth

El diseño es **plano: no hay sombras**. La separación entre planos se logra con el color de fondo (hueso contra verde) y con los contornos de las tarjetas.

**Única excepción: las tarjetas de proyecto.** Al pasar el cursor se levantan unos **6px** con una sombra suave y difusa, como si flotaran. Se propone `0 12px 32px rgba(0, 72, 4, 0.15)`, una sombra teñida del verde fuerte ⚠️ REVISAR. En ningún otro elemento hay sombra.

## Shapes

**Todo va redondeado; no hay esquinas rectas.** Solo se usan recuadros redondeados: nada de manchas, ondas ni formas libres. El nivel de redondeo depende del elemento:

- **Botones:** píldora completa, totalmente redondos a los lados (`{rounded.full}`).
- **Recuadros de información y tarjetas:** redondeo marcado de 24px (`{rounded.md}`).
- **Imágenes dentro de una tarjeta:** 16px (`{rounded.sm}`), un poco menos que la tarjeta, para que las esquinas queden anidadas.
- **Íconos de redes, números o pasos:** dentro de círculos perfectos (`{rounded.full}`).
- **Fotos personales:** con el mismo redondeo que las tarjetas (`{rounded.md}`), o como PNG recortado solo con la silueta, sin recuadro, según el caso.
- **Separadores:** una línea sólida delgada con las puntas redondeadas (se propone 2px ⚠️ REVISAR).

Los recuadros tienen dos variantes:

- **Con contorno** (`info-box-outlined`): fondo igual al de la sección y borde de 2px en verde.
- **Rellenos** (`info-box-filled`): fondo de color suave (`{colors.surface-soft}`), sin borde.

## Components

**Botones** (`button-light`, `button-dark`). Píldora solo con borde de 2px, sin relleno, con el texto del mismo color que el borde, en Urbanist Bold mayúsculas (`{typography.button}`). Alto mínimo de 44px.

- **En sección hueso:** borde y texto rojo (`{colors.tertiary}`). Al pasar el cursor se rellena de rojo y el texto pasa a hueso (`button-light-hover`).
- **En sección verde fuerte:** borde y texto verde claro (`{colors.secondary}`). Al pasar el cursor se rellena de verde claro y el texto pasa a verde fuerte (`button-dark-hover`).
- La transición es suave, de unos **0.3 segundos**.

**Navegación y enlaces** (`nav-link`). Los enlaces del header van en verde fuerte (`{colors.primary}`). Al pasar el cursor, y cuando se está en esa sección, el texto cambia a rojo (`{colors.tertiary}`). Así siempre se sabe en qué parte de la página se está.

**Tarjetas de proyecto** (`card-project`). Cada tarjeta lleva imagen, categoría y texto, con contorno de 2px en verde fuerte.

- La imagen va arriba, con esquinas de 16px (`{rounded.sm}`).
- Debajo, la categoría como texto pequeño: Inter 14px Medium, mayúsculas, verde fuerte (`card-project-category`).
- Luego, un texto breve en Inter (`{typography.body}`).
- Van 3 por fila en computadora, 2 en tablet y 1 en celular.
- Al pasar el cursor, la tarjeta se levanta 6px con una sombra suave y la imagen hace un zoom muy leve dentro de su marco (se propone 1.04× ⚠️ REVISAR). Al dar clic se abre la página propia del proyecto.

**Experiencia** (`card-experience`). Tarjetas con contorno verde, ordenadas de lo más reciente a lo más antiguo. Cada una lleva el puesto en Urbanist Bold (`{typography.title-card}`) y el lugar y la fecha en Inter pequeña (`{typography.meta}`).

**Contacto** (`icon-circle`). La sección reúne la información y los enlaces. Los íconos de redes sociales van dentro de círculos y cambian de color al pasar el cursor. Los colores de reposo y de hover del círculo son una propuesta ⚠️ REVISAR.

**Animaciones.** Los elementos aparecen suavemente conforme se hace scroll. Todas las animaciones y hovers son suaves, nunca bruscos (alrededor de 0.3 s, con curva `ease-out` ⚠️ REVISAR): acompañan el recorrido sin distraer de los proyectos.

## Do's and Don'ts

**Sí**

- Alternar secciones hueso y verde fuerte para generar contraste.
- Redondear todo: botones en píldora, recuadros con 24px, imágenes internas con 16px.
- Escribir los títulos siempre en Urbanist Bold mayúsculas, y el cuerpo siempre en Inter.
- Lograr la jerarquía con el contraste entre Bold y Light.
- Dejar mucho aire alrededor de títulos, fotos y tarjetas.
- Usar el rojo con moderación: solo en botones y en enlaces activos o en hover.
- Hacer todas las animaciones y hovers suaves.

**No**

- No usar degradados.
- No usar sombras, salvo la de las tarjetas de proyecto al pasar el cursor.
- No poner texto verde claro sobre hueso.
- No poner rojo sobre verde fuerte.
- No usar negro puro; el texto va en casi negro (`{colors.on-surface}`).
- No usar esquinas rectas.
- No usar más de dos tipografías (Urbanist e Inter).
- No escribir «jav» ni «jv» como nombre en el CV; ahí va Javier Valencia.

## Pendientes de revisión

Estos valores no venían en DESIGN.docx y se completaron con una propuesta razonable. Están marcados con ⚠️ REVISAR en el archivo:

1. **Interlineado y espaciado entre letras** de todos los estilos de texto.
2. **Color de los recuadros rellenos** (`surface-soft`, #EAF7E4).
3. **Tamaño del título de tarjeta** (22px) y **peso del texto de lugar y fecha** (Regular).
4. **Estilo de los enlaces del header** (se usa el de etiquetas: Inter 14px Medium mayúsculas).
5. **Color del título del hero** (hueso; podría ser verde claro).
6. **Alto del header** (80px) y **margen lateral** (24px).
7. **Rellenos internos** de botones, tarjetas y recuadros.
8. **Tamaño y colores del círculo de íconos** de contacto (48px; verde claro con ícono verde fuerte, invertido en hover).
9. **Sombra de las tarjetas de proyecto** (`0 12px 32px rgba(0, 72, 4, 0.15)`) y **zoom de la imagen** (1.04×).
10. **Puntos de quiebre** (768px y 1024px) y **separación entre secciones en tablet** (96px).
11. **Grosor de los separadores** (2px) y **curva de las animaciones** (`ease-out`).
