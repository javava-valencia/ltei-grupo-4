---
version: alpha
name: jv
description: Sistema de diseño del portafolio de Javier Valencia (jv). Alegre, orgánico y extrovertido; formas redondeadas, mucho aire y un contraste claro entre el verde profundo y el fondo hueso.

colors:
  primary: "#004804"          # Verde fuerte · color principal
  on-primary: "#FFF8EB"       # Hueso: texto de cuerpo sobre verde fuerte
  secondary: "#ADF3AF"        # Verde claro · títulos, bordes y botones sobre verde fuerte
  on-secondary: "#004804"     # Verde fuerte sobre verde claro
  tertiary: "#FF1542"         # Rojo · acento (botones en hueso, hover, enlace activo)
  on-tertiary: "#FFF8EB"      # Hueso sobre rojo (botón en hover)
  neutral: "#FFF8EB"          # Hueso · base neutra cálida
  surface: "{colors.neutral}"               # Fondo del sitio, del header y de las secciones claras
  on-surface: "#111111"                     # Casi negro · texto de cuerpo sobre hueso
  surface-inverse: "{colors.primary}"       # Fondo del hero y de las secciones oscuras
  on-surface-inverse: "{colors.on-primary}" # Texto de cuerpo sobre verde fuerte
  surface-soft: "#EAF7E4"                   # Verde suave · relleno de recuadros en secciones hueso
  surface-inverse-soft: "#0E6012"           # Verde medio · relleno de recuadros y píldoras en secciones verde fuerte

typography:
  display:                    # Título del hero · MAYÚSCULAS
    fontFamily: Urbanist
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
  display-mobile:
    fontFamily: Urbanist
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
  heading:                    # Título de sección · MAYÚSCULAS
    fontFamily: Urbanist
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.02em
  heading-mobile:
    fontFamily: Urbanist
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.02em
  subheading:
    fontFamily: Urbanist
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: 0em
  title-card:                 # Título de tarjeta (p. ej. el puesto en Experiencia) · MAYÚSCULAS
    fontFamily: Urbanist
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.02em
  body:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-mobile:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-strong:                # Dato destacado: empresa en Experiencia, carrera en Educación
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0em
  label:                      # Etiquetas, categorías, pies de foto y enlaces del header · MAYÚSCULAS
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  meta:                       # Lugar y fecha en las tarjetas
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0em
  button:                     # MAYÚSCULAS · 19px o más
    fontFamily: Urbanist
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.04em

spacing:
  unit: 8px                   # Unidad base del sistema
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  button-y: 14px              # Relleno vertical de los botones
  button-x: 32px              # Relleno horizontal de los botones
  section: 120px              # Separación vertical entre secciones · computadora (≥ 1024px)
  section-tablet: 96px        # Separación vertical entre secciones · tablet (768–1023px)
  section-mobile: 64px        # Separación vertical entre secciones · celular (< 768px)
  container: 1200px           # Ancho máximo del contenido, centrado
  gutter: 24px                # Margen lateral a cada lado
  header-height: 80px         # Alto del header fijo
  touch-target: 44px          # Tamaño mínimo de botones e íconos
  divider: 2px                # Grosor de los separadores
  breakpoint-tablet: 768px    # Desde aquí: tablet
  breakpoint-desktop: 1024px  # Desde aquí: computadora

rounded:
  sm: 16px                    # Imágenes dentro de tarjetas (esquinas anidadas)
  md: 24px                    # Tarjetas, recuadros de información y fotos
  full: 9999px                # Botones píldora, círculos de íconos, números, pasos y puntas de separadores

components:
  header:                    # Estado normal: al bajar, después del hero
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    height: "{spacing.header-height}"
    padding: "{spacing.gutter}"
  header-on-hero:            # Estado inicial: mientras el hero está debajo del header
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.secondary}"
    height: "{spacing.header-height}"
    padding: "{spacing.gutter}"
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    padding: "{spacing.xs}"
  nav-link-hover:
    textColor: "{colors.tertiary}"
  nav-link-active:
    textColor: "{colors.tertiary}"
  nav-link-on-hero:
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    padding: "{spacing.xs}"
  nav-link-on-hero-active:   # Sobre verde no se usa rojo
    textColor: "{colors.on-primary}"
  nav-toggle:                 # Botón del menú (celular y tablet): círculo con borde rojo, sin relleno
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    size: 44px
  nav-toggle-on-hero:         # Sobre el hero: borde verde claro
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    size: 44px
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
    textColor: "{colors.secondary}"
    typography: "{typography.display}"
  hero-subtitle:              # Subtítulo del hero (p. ej. «Diseñador gráfico»): hueso
    textColor: "{colors.on-primary}"
    typography: "{typography.subheading}"
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
  button-light:               # Píldora con borde rojo de 2px, sin relleno · 14px × 32px
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "{spacing.button-x}"
    height: "{spacing.touch-target}"
  button-light-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  button-dark:                # Píldora con borde verde claro de 2px, sin relleno · 14px × 32px
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "{spacing.button-x}"
    height: "{spacing.touch-target}"
  button-dark-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  info-box:                   # Siempre relleno, sin borde (el contorno es solo de botones)
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  info-box-title:
    textColor: "{colors.primary}"
    typography: "{typography.title-card}"
  info-box-dark:              # Versión para secciones verde fuerte
    backgroundColor: "{colors.surface-inverse-soft}"
    textColor: "{colors.on-surface-inverse}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  info-box-dark-title:
    textColor: "{colors.secondary}"
    typography: "{typography.title-card}"
  card-project:               # Borde de 2px verde fuerte, sin relleno · se levanta con sombra al pasar el cursor
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-project-image:         # Marco del logo: borde de 2px verde fuerte, sin relleno
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
  card-project-category:
    textColor: "{colors.primary}"
    typography: "{typography.label}"
  card-project-dark:          # Tarjeta de proyecto sobre sección verde fuerte: hueso, sin borde
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-experience:            # Relleno verde suave, sin borde
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-title:
    textColor: "{colors.primary}"
    typography: "{typography.title-card}"
  card-meta:
    textColor: "{colors.on-surface}"
    typography: "{typography.meta}"
  card-experience-place:      # Empresa en la tarjeta de experiencia
    textColor: "{colors.primary}"
    typography: "{typography.body-strong}"
  icon-circle:                # Íconos de redes, números y pasos
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 48px
  icon-circle-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
  icon-circle-dark-hover:     # Sobre verde fuerte, el círculo pasa a hueso (invertido se perdería)
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.primary}"
  contact-link:               # Fila de contacto: círculo + texto, toda la fila es el enlace
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.body}"
    height: "{spacing.touch-target}"
  level-dot:                  # Nivel de software: círculo lleno
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 14px
  level-dot-empty:            # Nivel de software: círculo vacío, solo contorno de 2px verde fuerte
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.full}"
    size: 14px
  step-circle:                # Números y pasos (no interactivos)
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    size: 48px
  tag:                        # Píldora que no es botón, en sección hueso: relleno verde fuerte
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  tag-dark:                   # Píldora que no es botón, en sección verde fuerte: relleno verde medio
    backgroundColor: "{colors.surface-inverse-soft}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  divider:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: "{spacing.divider}"
  photo:
    rounded: "{rounded.md}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    padding: "{spacing.2xl}"
  footer-dark:                # Pie de página cuando la última sección es hueso (páginas de proyecto)
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.secondary}"
    padding: "{spacing.2xl}"
  back-link:                  # «← Volver a proyectos»: enlace de texto con flecha
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    height: "{spacing.touch-target}"
  back-link-hover:
    textColor: "{colors.tertiary}"
  gallery-image:              # Imagen de la galería horizontal: directo sobre el hueso, sin relleno
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  gallery-arrow:              # Flechas de la galería: botón circular con borde rojo, sin relleno
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    size: 48px
  gallery-arrow-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  project-feature:            # Página de proyecto sin galería: marco del logo, borde verde fuerte sin relleno
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  image-viewer:               # Visor de imagen ampliada a pantalla completa
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
  image-viewer-arrow:         # Flechas y cerrar del visor: borde verde claro, sin relleno
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    size: 48px
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

- **Verde fuerte · `{colors.primary}` (#004804):** color principal. Títulos en las secciones claras, fondo de las secciones oscuras, del hero y del header mientras está sobre el hero, borde de las tarjetas de proyecto y relleno de las píldoras en secciones hueso.
- **Verde claro · `{colors.secondary}` (#ADF3AF):** título del hero, y títulos, botones y enlaces del header cuando están sobre verde fuerte. Nunca como texto sobre hueso.
- **Rojo · `{colors.tertiary}` (#FF1542):** acento. Botones en secciones claras, hover y sección activa de los enlaces. Se usa con moderación.
- **Hueso · `{colors.neutral}` (#FFF8EB):** fondo base del sitio y del header (`{colors.surface}`), y texto de cuerpo sobre verde fuerte (`{colors.on-primary}`).
- **Casi negro · `{colors.on-surface}` (#111111):** texto de cuerpo sobre hueso y sobre verde suave. No se usa negro puro.
- **Verde suave · `{colors.surface-soft}` (#EAF7E4):** relleno de recuadros y tarjetas de experiencia en las secciones hueso. No se usa en píldoras: sobre hueso se pierden. Sobre él, títulos en verde fuerte y texto en casi negro.
- **Verde medio · `{colors.surface-inverse-soft}` (#0E6012):** relleno de recuadros y píldoras en las secciones verde fuerte. Sobre él, títulos en verde claro (6.0:1) y texto en hueso (7.4:1).

**Combinaciones permitidas.** Las secciones alternan entre fondo hueso y fondo verde fuerte, y cada superficie tiene su regla:

| Superficie | Títulos | Cuerpo | Botones |
| --- | --- | --- | --- |
| Hueso (`{colors.surface}`) | Verde fuerte | Casi negro | Rojo |
| Verde fuerte (`{colors.surface-inverse}`) | Verde claro | Hueso | Verde claro |
| Verde suave (`{colors.surface-soft}`) | Verde fuerte | Casi negro | — |
| Verde medio (`{colors.surface-inverse-soft}`) | Verde claro | Hueso | — |

**Combinaciones prohibidas.**

- **Verde claro sobre hueso:** casi no se ve.
- **Rojo sobre verde fuerte:** no tiene contraste suficiente y los dos colores «vibran» juntos.

**Nota de contraste.** El rojo sobre hueso tiene un contraste de 3.66:1. Basta para texto grande (el mínimo es 3:1), como el texto de los botones (19px Bold), pero no para texto de cuerpo. Por eso el rojo nunca se usa en párrafos.

## Typography

Dos familias, ambas sans serif y de licencia libre (Google Fonts), con sus archivos incluidos en el proyecto.

- **Urbanist** es la fuente de títulos: geométrica, con curvas muy redondas que acompañan el trazo del logo.
- **Inter** es la fuente de lectura: neutra, clara y muy legible en pantalla.

La jerarquía se basa en el **contraste entre pesos**: los títulos van pesados (Bold) y los subtítulos ligeros (Light), justo debajo, para que se note la diferencia.

| Nivel | Token | Familia | Tamaño | Peso | Interlineado | Espaciado entre letras | Mayúsculas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Título display (hero) | `{typography.display}` | Urbanist | 64px | Bold | 1.1 | +2% | Sí |
| Título de sección | `{typography.heading}` | Urbanist | 44px | Bold | 1.15 | +2% | Sí |
| Subtítulo | `{typography.subheading}` | Urbanist | 28px | Light | 1.3 | — | No |
| Título de tarjeta | `{typography.title-card}` | Urbanist | 22px | Bold | 1.3 | +2% | Sí |
| Cuerpo de texto | `{typography.body}` | Inter | 18px | Regular | 1.6 | — | No |
| Dato destacado | `{typography.body-strong}` | Inter | 18px | Medium | 1.6 | — | No |
| Etiquetas, categorías, pies de foto y enlaces del header | `{typography.label}` | Inter | 14px | Medium | 1.4 | +4% | Sí |
| Lugar y fecha | `{typography.meta}` | Inter | 14px | Regular | 1.4 | — | No |
| Texto de botones | `{typography.button}` | Urbanist | 19px o más | Bold | 1 | +4% | Sí |

En celular, el título display baja a 40px (`{typography.display-mobile}`), el de sección a 32px (`{typography.heading-mobile}`) y el cuerpo y el dato destacado a 16px (`{typography.body-mobile}`). Cada uno conserva el interlineado y el espaciado entre letras de su versión de computadora.

## Layout

El espaciado se basa en una **unidad de 8px** (`{spacing.unit}`). El contenido tiene un **ancho máximo de 1200px** (`{spacing.container}`), centrado, con un **margen lateral de 24px** a cada lado (`{spacing.gutter}`). Hay mucho aire alrededor de títulos, fotos y tarjetas: el contenido nunca va apretado.

- **Header:** fijo arriba (sticky), de **80px** de alto (`{spacing.header-height}`), siempre visible, con los enlaces Inicio, Sobre mí, Proyectos, Experiencia y Contacto. Mientras el hero está debajo, el header es **verde fuerte** con logo y enlaces en verde claro, y se funde con el hero (`header-on-hero`). En cuanto el hero termina de pasar por debajo, cambia a **hueso** con logo y enlaces en verde fuerte (`header`) y se queda así. El cambio dura 0.3 s con `ease-out` y es directo de un color al otro, sin tonos intermedios, para respetar los colores planos. En las páginas sin hero (por ejemplo, la página de un proyecto), el header empieza directamente en hueso.
- **Inicio (hero):** primera pantalla, a pantalla completa (alto de la ventana menos el header), sobre fondo verde fuerte y con todo **centrado**: el logo `jv` en su versión oscura (trazo verde claro), debajo el nombre en verde claro (`hero-title`), el subtítulo en hueso (`hero-subtitle`) y dos botones de atajo (`button-dark`). Al hacer scroll aparece la foto y empieza la presentación personal.
- **Sobre mí:** dos columnas en computadora: la foto a la izquierda (`photo`, 24px de redondeo) y el texto a la derecha; debajo, los recuadros de información en una cuadrícula de 3 (2 en tablet, 1 en celular). En celular, la foto va arriba del texto.
- **Pie de página** (`footer`): fondo hueso después de la última sección verde, con el logo, el nombre y el botón «Volver arriba» (`button-light`), que regresa al hero. Si la última sección es hueso, el pie va en verde fuerte (`footer-dark`) con logo claro y `button-dark`, para mantener la alternancia.
- **Página de proyecto:** fondo hueso con el header en hueso desde el inicio (no hay hero) y el enlace «Proyectos» marcado como activo. De arriba abajo: «← Volver a proyectos» (`back-link`); el área como etiqueta y el título del proyecto en `{typography.heading}` verde fuerte; dos columnas en computadora con la descripción (y los enlaces extra, como «Ver video») a la izquierda y un recuadro con los softwares como etiquetas (`tag`) a la derecha (una columna en celular); la galería horizontal; y al final, separado por una línea de 2px en verde fuerte (`divider`), el enlace al proyecto siguiente con un `button-light`. Termina con `footer-dark`.
- **Fondos alternados:** unas secciones van en hueso y otras en verde fuerte, para que haya contraste al recorrer la página.
- **Proyectos:** cuadrícula de tarjetas; si la última fila queda incompleta, se centra. Cada proyecto abre su propia página, para poder compartir el enlace directo a un trabajo. Cuando la sección de proyectos va sobre verde fuerte, las tarjetas usan la versión hueso (`card-project-dark`).

**Rellenos internos.**

| Elemento | Relleno |
| --- | --- |
| Botones | 14px arriba y abajo (`{spacing.button-y}`), 32px a los lados (`{spacing.button-x}`) |
| Tarjetas de proyecto y de experiencia | 24px por todos lados (`{spacing.md}`) |
| Recuadros de información | 32px por todos lados (`{spacing.lg}`) |

**Comportamiento responsivo.** El diseño se adapta sin perder lo orgánico ni la legibilidad.

| Pantalla | Ancho | Columnas de proyectos | Separación entre secciones | Otros |
| --- | --- | --- | --- | --- |
| Celular | menos de 768px | 1 (tarjetas apiladas) | 64px (`{spacing.section-mobile}`) | Menú hamburguesa; en el hero, logo, nombre y foto van uno debajo del otro |
| Tablet | de 768px a 1023px | 2 | 96px (`{spacing.section-tablet}`) | — |
| Computadora | 1024px o más | 3 | 120px (`{spacing.section}`) | Ancho máximo de 1200px centrado |

Los botones e íconos miden **mínimo 44px** (`{spacing.touch-target}`) para tocarlos cómodamente.

## Elevation & Depth

El diseño es **plano: no hay sombras**. La separación entre planos se logra con el color de fondo: hueso contra verde, y el relleno de las tarjetas contra el fondo de la sección.

**Única excepción: las tarjetas de proyecto.** Al pasar el cursor se levantan unos **6px** con una sombra suave y difusa, como si flotaran: verde fuerte al 15%, desplazada 12px hacia abajo y difuminada 32px (`0 12px 32px rgba(0, 72, 4, 0.15)`). En ningún otro elemento hay sombra.

**Sobre secciones verde fuerte** (`card-project-dark`), una sombra verde no se vería, así que la tarjeta hueso usa la misma sombra en casi negro al 35%: `0 12px 32px rgba(17, 17, 17, 0.35)`.

## Shapes

**Todo va redondeado; no hay esquinas rectas.** Solo se usan recuadros redondeados: nada de manchas, ondas ni formas libres. El nivel de redondeo depende del elemento:

- **Botones:** píldora completa, totalmente redondos a los lados (`{rounded.full}`).
- **Recuadros de información y tarjetas:** redondeo marcado de 24px (`{rounded.md}`).
- **Imágenes dentro de una tarjeta:** 16px (`{rounded.sm}`), un poco menos que la tarjeta, para que las esquinas queden anidadas.
- **Íconos de redes, números o pasos:** dentro de círculos perfectos (`{rounded.full}`).
- **Fotos personales:** con el mismo redondeo que las tarjetas (`{rounded.md}`), o como PNG recortado solo con la silueta, sin recuadro, según el caso.
- **Separadores:** una línea sólida de **2px** (`{spacing.divider}`) con las puntas redondeadas.

**Contorno = botón; relleno = información.** Para que nadie confunda un recuadro con algo que se puede pulsar, el borde sin relleno es de los botones. Todo lo que no es botón va **relleno y sin borde**:

- **Recuadros en secciones hueso** (`info-box`): fondo verde suave (`{colors.surface-soft}`); títulos en verde fuerte y texto en casi negro.
- **Recuadros en secciones verde fuerte** (`info-box-dark`): fondo verde medio (`{colors.surface-inverse-soft}`); títulos en verde claro y texto en hueso.
- **Píldoras que no son botones** (etiquetas y chips): en secciones hueso, relleno verde fuerte con texto verde claro (`tag`); en secciones verde fuerte, relleno verde medio con texto verde claro (`tag-dark`). Así no se pierden sobre el hueso y no se confunden con un botón de solo contorno.

**Excepción: las tarjetas de proyecto** conservan el borde de 2px en verde fuerte, sin relleno. No se confunden con un botón porque son mucho más grandes, llevan imagen y texto, y se levantan con sombra al pasar el cursor. Sobre secciones verde fuerte, donde ese borde no se vería, la tarjeta va **rellena de hueso y sin borde** (`card-project-dark`).

**Indicadores de nivel** (`level-dot`, `level-dot-empty`): círculos de 14px; los llenos en verde fuerte y los vacíos solo con contorno de 2px verde fuerte. Son la otra excepción al contorno: son tan pequeños y van en fila que no se confunden con un botón.

**Marco de imagen** (`card-project-image`, `project-feature`): borde de 2px en verde fuerte, sin relleno. Se usa en dos lugares: dentro de las tarjetas de proyecto (esquinas de 16px) y en la página de un proyecto que no tiene galería, donde enmarca su logo (esquinas de 24px y 48px de relleno). No se confunde con un botón porque contiene una imagen, no texto, y no es pulsable.

## Components

**Botones** (`button-light`, `button-dark`). Píldora solo con borde de 2px, sin relleno, con el texto del mismo color que el borde, en Urbanist Bold mayúsculas (`{typography.button}`). Relleno de 14px arriba y abajo y 32px a los lados; alto mínimo de 44px.

- **En sección hueso:** borde y texto rojo (`{colors.tertiary}`). Al pasar el cursor se rellena de rojo y el texto pasa a hueso (`button-light-hover`).
- **En sección verde fuerte:** borde y texto verde claro (`{colors.secondary}`). Al pasar el cursor se rellena de verde claro y el texto pasa a verde fuerte (`button-dark-hover`).
- La transición dura **0.3 segundos** con curva `ease-out`.

**Navegación y enlaces** (`nav-link`). Los enlaces del header usan el estilo de etiqueta: Inter Medium mayúsculas, 14px, letras +4% (`{typography.label}`). Van en verde fuerte (`{colors.primary}`) y cambian a rojo (`{colors.tertiary}`) al pasar el cursor y en la sección activa. Así siempre se sabe en qué parte de la página se está. Mientras el header está sobre el hero (`nav-link-on-hero`), los enlaces van en verde claro y cambian a hueso al pasar el cursor y en la sección activa, porque el rojo no se usa sobre verde fuerte.

- **Indicador de sección activa:** además del color, el enlace activo lleva debajo una línea de 2px con puntas redondeadas (roja sobre hueso, hueso sobre verde), que aparece con una transición de 0.3 s. Así el estado no depende solo del color.
- **Borde del header:** al empezar a bajar, el header hueso muestra una línea inferior de 2px en verde suave que lo separa del contenido. Sobre el hero no lleva línea.
- **Botón del menú** (`nav-toggle`): círculo de 44px con borde de 2px, sin relleno, como un botón: rojo sobre el header hueso (se rellena de rojo con el ícono en hueso al pasar el cursor) y verde claro sobre el hero (`nav-toggle-on-hero`, se rellena de verde claro con el ícono verde fuerte).
- **Menú en celular y tablet** (menos de 1024px): los enlaces se guardan en un panel que baja desde el header, con el mismo fondo del header (hueso, o verde fuerte sobre el hero) y los enlaces en columna.

**Tarjetas de proyecto** (`card-project`). Cada tarjeta lleva imagen, categoría y título, con borde de 2px en verde fuerte, fondo igual al de la sección y 24px de relleno.

- La imagen (el logo del proyecto) va arriba, dentro de un **marco con borde de 2px en verde fuerte (`{colors.primary}`) y sin relleno**, con esquinas de 16px (`{rounded.sm}`). El logo se ve sobre el mismo fondo que la tarjeta.
- Debajo, la categoría como texto pequeño: Inter 14px Medium, mayúsculas, verde fuerte (`card-project-category`).
- La tarjeta **no lleva descripción ni enlaces extra**: solo imagen, categoría y título (y la etiqueta de reconocimiento si la hay). La descripción, los softwares y los enlaces extra (como un video) van dentro de la página del proyecto.
- Van 3 por fila en computadora, 2 en tablet y 1 en celular. Si la última fila no se completa, sus tarjetas quedan **centradas** (por ejemplo, una séptima tarjeta sola va al centro, no a la izquierda).
- Al pasar el cursor, la tarjeta se levanta 6px con la sombra suave descrita en *Elevation & Depth*, y la imagen crece a **1.04 veces** su tamaño dentro de su marco. Al dar clic se abre la página propia del proyecto.
- **Sobre verde fuerte** (`card-project-dark`): fondo hueso, sin borde, mismas esquinas, imagen, textos y movimiento; sombra en casi negro al 35%.
- Un reconocimiento o premio se marca con una etiqueta (`tag`) sobre la tarjeta.

**Experiencia** (`card-experience`). Tarjetas con fondo verde suave, sin borde, y 24px de relleno, ordenadas de lo más reciente a lo más antiguo. Cada una lleva el puesto como título de tarjeta, en Urbanist Bold mayúsculas 22px (`card-title`); debajo, la empresa como dato destacado en Inter Medium 18px verde fuerte (`card-experience-place`), y la fecha en Inter 14px Regular (`card-meta`). Puede llevar una descripción en `{typography.body}`: en tablet y computadora va a la derecha (un tercio para puesto, lugar y fecha; dos tercios para la descripción) y en celular, debajo.

**Recuadros de información** (`info-box`, `info-box-dark`). Siempre rellenos y sin borde, con esquinas de 24px y 32px de relleno. El dato principal de un recuadro (por ejemplo, la carrera en Educación) va en `{typography.body-strong}` verde fuerte; los niveles de idioma, en `{typography.label}` verde fuerte. En secciones hueso: fondo verde suave, título en verde fuerte (`info-box-title`) y texto en casi negro. En secciones verde fuerte: fondo verde medio, título en verde claro (`info-box-dark-title`) y texto en hueso.

**Etiquetas y chips** (`tag`, `tag-dark`). Píldoras rellenas, sin borde, con texto de etiqueta en verde claro. En secciones hueso el relleno es verde fuerte; en secciones verde fuerte, verde medio. Aunque tienen forma de píldora, el relleno y la ausencia de borde las distinguen de los botones.

**Contacto** (`icon-circle`, `contact-link`). La sección reúne la información y los enlaces. Cada dato es una fila que funciona como enlace completo: el ícono dentro de un círculo de **48px** y, al lado, el nombre del medio como etiqueta (`{typography.label}`, verde claro) y el dato en Inter (hueso). Círculo verde claro con ícono verde fuerte. Al pasar el cursor, en secciones hueso se invierten (círculo verde fuerte con ícono verde claro, `icon-circle-hover`); en secciones verde fuerte el círculo pasa a hueso con el ícono verde fuerte (`icon-circle-dark-hover`), porque invertido se perdería contra el fondo.

**Nivel de software** (`level-dot`, `level-dot-empty`). Cada programa lleva su nivel en cinco círculos de 14px en fila: los llenos en verde fuerte y los vacíos solo con contorno de 2px verde fuerte. Para lectores de pantalla, el nivel se anuncia como texto («4 de 5»).

**Pie de página** (`footer`, `footer-dark`). Fondo hueso, logo en verde fuerte, el nombre **Javier Valencia** como título de tarjeta y el botón «Volver arriba» (`button-light`) que regresa al inicio. En las páginas de proyecto, donde la última sección es hueso, va en verde fuerte con logo claro y `button-dark`.

**Volver a proyectos** (`back-link`). Enlace de texto con flecha a la izquierda, en estilo de etiqueta verde fuerte; al pasar el cursor cambia a rojo y la flecha se mueve 4px hacia la izquierda. Alto mínimo de 44px.

**Galería horizontal** (`gallery-image`, `gallery-arrow`). Las imágenes del proyecto van en fila y se recorren deslizando hacia los lados, con ajuste a cada imagen (*scroll snap*). Todas tienen la misma altura (entre 280px y 620px, según la pantalla), conservan su proporción y llevan esquinas de 24px, directo sobre el fondo hueso, sin relleno. Para que todas las piezas se vean a una escala parecida: las imágenes con fondo transparente se recortan sin márgenes vacíos (una bolsa o un celular ocupan toda la altura), y los logotipos llevan aire alrededor para no verse más grandes que el resto. Arriba a la derecha van dos flechas en botones circulares de 48px con borde rojo, sin relleno, que se rellenan al pasar el cursor, y entre ellas el contador («2 / 6»). También se recorre con las flechas del teclado. Al pasar el cursor, la imagen crece a 1.02 veces y el cursor indica que se puede ampliar. La barra de desplazamiento usa verde fuerte sobre verde suave.

**Visor de imagen** (`image-viewer`). Al tocar una imagen de la galería se abre a pantalla completa sobre verde fuerte, con su descripción debajo en hueso. Arriba van el contador en verde claro y tres botones circulares con borde verde claro (`image-viewer-arrow`): anterior, siguiente y cerrar. Las imágenes muy altas (como una landing completa) se recorren hacia abajo dentro del visor. Se cierra con «Esc».

**Página de proyecto sin galería** (`project-feature`). Si el proyecto no tiene imágenes de galería (como una animación que vive en video), en su lugar va el logo dentro de un marco de imagen grande.

**Siguiente proyecto.** Al final de cada página de proyecto, después de una línea de 2px en verde fuerte (`divider`): la etiqueta «Siguiente proyecto», el nombre en título de tarjeta y un `button-light` «Ver proyecto →». El último proyecto lleva de vuelta al primero.

**Tarjeta de proyecto como enlace.** Toda la tarjeta abre la página del proyecto. Con teclado, el foco rodea la tarjeta completa.

**Números y pasos** (`step-circle`). Círculos de 48px rellenos de verde fuerte con el número en verde claro.

**Separadores** (`divider`). Línea sólida de 2px en verde fuerte con las puntas redondeadas.

**Accesibilidad.**

- **Foco visible:** todo lo que se puede pulsar muestra, al recorrerlo con teclado, un contorno de 3px separado 3px del elemento y con esquinas redondeadas: verde fuerte sobre hueso y verde claro sobre verde fuerte.
- **Saltar al contenido:** primer elemento de cada página, oculto hasta recibir el foco; aparece arriba a la izquierda como píldora rellena de verde fuerte con texto verde claro en `{typography.button}`.
- **Movimiento reducido:** si la persona pidió reducir el movimiento en su equipo, se desactivan las apariciones al hacer scroll, el desplazamiento suave y el levantamiento de las tarjetas.
- **Textos alternativos:** toda imagen con contenido lleva una descripción; los logos decorativos junto al nombre llevan descripción vacía. Los enlaces que abren otra pestaña lo anuncian a lectores de pantalla.
- **Tamaño táctil:** botones, enlaces del menú, flechas y círculos miden mínimo 44px.

**Solo en la página de referencia** (`design.html`). Estos elementos sirven para explicar el sistema y no se usan en el portafolio:

- **Selector de vista** («Computadora / Celular»): grupo de botones en píldora con borde rojo; la opción activa va rellena de rojo con texto hueso.
- **Numeración de sección** («01 · Overview»): etiqueta precedida por una línea corta de 2px con puntas redondeadas, en el color de los títulos de la sección.
- **Etiquetas de contraste:** píldoras rellenas que muestran la proporción de contraste: hueso con texto verde fuerte para las permitidas y casi negro con texto hueso para las prohibidas.
- **Aviso de copiado:** píldora verde fuerte con borde verde claro que aparece abajo al copiar un color.

**Animaciones.** Los elementos aparecen suavemente conforme se hace scroll. Todas las animaciones y hovers usan la curva **`ease-out`**: arrancan rápido y frenan suave al final. Nunca son bruscas; acompañan el recorrido sin distraer de los proyectos.

## Do's and Don'ts

**Sí**

- Alternar secciones hueso y verde fuerte para generar contraste.
- Redondear todo: botones en píldora, recuadros con 24px, imágenes internas con 16px.
- Escribir los títulos siempre en Urbanist Bold mayúsculas, y el cuerpo siempre en Inter.
- Lograr la jerarquía con el contraste entre Bold y Light.
- Dejar mucho aire alrededor de títulos, fotos y tarjetas.
- Usar el rojo con moderación: solo en botones y en enlaces activos o en hover.
- Hacer todas las animaciones y hovers suaves, con curva `ease-out`.
- Rellenar los recuadros y las píldoras que no son botones: píldoras en verde fuerte sobre hueso y en verde medio sobre verde fuerte.
- Empezar el header en verde fuerte sobre el hero y pasarlo a hueso al bajar.

**No**

- No usar degradados.
- No usar sombras, salvo la de las tarjetas de proyecto al pasar el cursor.
- No poner texto verde claro sobre hueso.
- No poner rojo sobre verde fuerte.
- No usar negro puro; el texto va en casi negro (`{colors.on-surface}`).
- No usar esquinas rectas.
- No usar recuadros con solo contorno: el borde sin relleno es de los botones (las únicas excepciones son las tarjetas de proyecto sobre hueso, los marcos de imagen y los círculos vacíos de nivel).
- No poner tarjetas con borde verde sobre verde fuerte: ahí la tarjeta va rellena de hueso.
- No usar el verde suave en píldoras: sobre hueso se pierde.
- No usar más de dos tipografías (Urbanist e Inter).
- No escribir «jav» ni «jv» como nombre en el CV; ahí va Javier Valencia.
