# Landing de CV · Javier Valencia

> Arquitectura de información, diseño y contenido de la landing del CV ([index.html](index.html)) y de las páginas de proyecto ([proyectos/](proyectos/)).
> Fuente original: «Arquitectura - CV.docx», actualizada con las decisiones tomadas al construir el sitio.
> El diseño visual se rige por [DESIGN.md](DESIGN.md); aquí se describe qué va en cada página y cómo se organiza.

---

## 1. Estructura general y navegación

Página única (*one page*) con cinco secciones que se recorren con scroll, más una página propia para cada proyecto. Las secciones alternan su fondo para generar contraste.

| Orden | Sección | Fondo | Contenido |
| --- | --- | --- | --- |
| 1 | Inicio | Verde fuerte | Logo jv, nombre y atajos |
| 2 | Sobre mí | Hueso | Foto, presentación, educación, software e idiomas |
| 3 | Proyectos | Verde fuerte | Cuadrícula con los 7 proyectos |
| 4 | Experiencia | Hueso | Keep It Custom y CREACONT |
| 5 | Contacto | Verde fuerte | Correo, teléfono y redes |
| — | Pie de página | Hueso | Logo, nombre y «Volver arriba» |

### Header

- Fijo arriba y siempre visible.
- **Color:** mientras se ve el Inicio, el header es **verde fuerte** (logo y enlaces en verde claro) y se funde con la portada. Al bajar, cambia a **hueso** (logo y enlaces en verde fuerte) y se queda así.
- **Izquierda:** logo jv; al pulsarlo regresa a Inicio.
- **Derecha:** enlaces Inicio, Sobre mí, Proyectos, Experiencia y Contacto.
- Al pulsar un enlace, la página se desliza suavemente hasta la sección.
- El enlace de la sección actual se marca: en rojo con una línea debajo cuando el header es hueso, y en hueso cuando el header es verde (el rojo no se usa sobre verde).
- En celular, los enlaces se guardan en un menú hamburguesa.

### Uso del nombre

- En todo el sitio el nombre se escribe **Javier Valencia**.
- **jv** es la marca (el logo) y nunca se usa como nombre.

### Títulos de sección

Cada sección lleva su título en Urbanist Bold mayúsculas y, debajo, un subtítulo en Urbanist Light:

| Sección | Título | Subtítulo |
| --- | --- | --- |
| Sobre mí | SOBRE MÍ | Creativo, detallista y responsable. |
| Proyectos | PROYECTOS | Empaque, UX/UI, editorial, ilustración, identidad y animación. |
| Experiencia | EXPERIENCIA | Agencia de publicidad y proyecto propio. |
| Contacto | CONTACTO | Escríbeme o búscame en redes. |

---

## 2. Inicio (hero)

Primera pantalla, a pantalla completa, sobre fondo verde fuerte, con todo centrado.

- **Al centro:** logo jv en su versión oscura (trazo verde claro).
- **Título:** JAVIER VALENCIA — Urbanist Bold mayúsculas, verde claro.
- **Subtítulo:** Diseñador gráfico — Urbanist Light, color hueso.
- **Botones de atajo** (borde y texto verde claro):
  - «Ver proyectos» → lleva a Proyectos.
  - «Contacto» → lleva a Contacto.
- Al hacer scroll aparece la foto y empieza la sección Sobre mí.

---

## 3. Sobre mí

Fondo hueso, en dos columnas en computadora (en celular, la foto va arriba del texto).

- **Izquierda:** fotografía con esquinas redondeadas (24px).
- **Derecha:** título, subtítulo y texto de presentación.

### Presentación

Hola, soy Javier Valencia, diseñador gráfico. Actualmente curso la Licenciatura en Diseño Gráfico Digital en la Universidad La Salle, iniciando mi séptimo semestre.

Me desempeño principalmente en UX/UI, diseño editorial, branding, empaque y fotografía, áreas en las que busco combinar estética, funcionalidad y una sólida intención conceptual.

Me defino como una persona creativa, detallista y responsable, con una actitud abierta, social y con muchas ganas de aprender. Soy social y extrovertido, lo que me permite trabajar de forma colaborativa y adaptarme con facilidad a distintos equipos.

Cuento con 1 año y 4 meses de experiencia en una agencia de publicidad, donde participé en proyectos reales y dinámicas de trabajo profesional.

Actualmente busco oportunidades como becario o colaborador junior en agencias donde pueda seguir desarrollándome y aportar desde el diseño.

### Recuadros de información

Debajo de la foto y el texto van tres recuadros de información **rellenos de verde suave, sin borde**, con esquinas de 24px: 3 por fila en computadora, 2 en tablet y 1 en celular.

#### Educación

- **Licenciatura en Diseño Gráfico Digital** — Universidad La Salle, 2023 – Ahora.

#### Software

Cada programa lleva su nivel en cinco círculos: los llenos en verde fuerte y los vacíos solo con contorno. Para lectores de pantalla, el nivel se lee como texto («Nivel 4 de 5»).

| Programa | Nivel |
| --- | --- |
| Photoshop | 4 de 5 |
| Illustrator | 4 de 5 |
| Figma | 4 de 5 |
| InDesign | 3 de 5 |
| Maya | 2 de 5 |
| Paquetería Office | 4 de 5 |

#### Idiomas

| Idioma | Nivel |
| --- | --- |
| Español | Nativo |
| Inglés | Avanzado |
| Francés | Básico |

---

## 4. Proyectos

La sección más importante del portafolio, con fondo verde fuerte.

- Cuadrícula de **3 tarjetas por fila** en computadora, **2** en tablet y **1** en celular. Si la última fila no se completa (por ejemplo, Big Hero 6 sola), sus tarjetas quedan **centradas**.
- Las tarjetas son **color hueso, sin borde**, para destacar sobre el verde.
- Cada tarjeta lleva el logo de la marca (dentro de un marco con borde verde fuerte), el área en texto pequeño y el título. Kroxi lleva además la etiqueta «Reconocimiento a! diseño».
- La descripción, los softwares y los enlaces extra (como el video) van **solo dentro de la página del proyecto**, no en la tarjeta.
- Al pasar el cursor, la tarjeta se levanta con una sombra suave y el logo crece un poco.
- Al pulsar cualquier parte de la tarjeta se abre la página del proyecto.
- **Kroxi va primero** porque es el proyecto con reconocimiento en los premios a! diseño.

### 4.1 Kroxi

- **Página:** `proyectos/kroxi.html`
- **Área:** Empaque / Identidad gráfica
- **Reconocimiento:** premios a! diseño
- **Descripción:** Proyecto en equipo donde desarrollamos la identidad y el empaque de Kroxi, un snack de gusanos deshidratados. Obtuvo un reconocimiento en los premios a! diseño.
- **Softwares:** Illustrator, Photoshop, Lightroom, Gemini, Fotografía
- **Galería:** 4 imágenes (las tres bolsas por separado y las tres juntas).

### 4.2 Prototipo de aplicación para la aerolínea Air Canada

- **Página:** `proyectos/air-canada.html`
- **Área:** UX/UI
- **Descripción:** Diseñé el prototipo de una aplicación para Air Canada pensada en un usuario específico. La app reúne en un solo lugar la reserva de vuelos, el check-in, el pase de abordar digital y herramientas para el viaje, como mapas del aeropuerto y wifi, con una navegación clara y la identidad de la aerolínea.
- **Softwares:** Figma, Illustrator, Pexels
- **Galería:** 6 pantallas de la app.

### 4.3 Prototipo de landing page para Dunkin’

- **Página:** `proyectos/dunkin.html`
- **Área:** UX/UI
- **Descripción:** Diseñé y codifiqué el prototipo de una landing page para renovar la imagen web de Dunkin’, pensada en un usuario específico. La página presenta las donas favoritas, el programa de recompensas y las reseñas de clientes con una estética divertida y apetitosa. Además, fue un ejercicio para aprender a codificar en HTML con Visual Studio Code.
- **Softwares:** Illustrator, Figma, Visual Studio Code
- **Galería:** 2 imágenes (parte superior e inferior de la landing).

### 4.4 Prozine (Mercedes-Benz)

- **Página:** `proyectos/prozine.html`
- **Área:** Diseño editorial
- **Descripción:** Proyecto editorial en el que diseñé «gen-rev», una revista que muestra cómo Mercedes-Benz ha evolucionado a través de las generaciones. Cada sección retrata una generación, como los Baby Boomers, con sus autos y su contexto, en una maquetación sobria y elegante en blanco y negro.
- **Softwares:** InDesign
- **Galería:** 3 imágenes de la revista.

### 4.5 Propuesta de una nueva línea de sabores para Jarritos, inspirada en la Selva Mexicana

- **Página:** `proyectos/jarritos.html`
- **Área:** Ilustración digital / Identidad gráfica
- **Descripción:** Propuesta de una nueva línea de sabores para Jarritos inspirada en la Selva Mexicana. Cada sabor se representa con un animal de la selva: una serpiente para mango kiwi, una guacamaya para fresa sandía y un tucán para naranja piña, ilustrados digitalmente junto con la fruta y la vegetación.
- **Softwares:** Photoshop, Illustrator
- **Galería:** 3 latas (mango kiwi, fresa sandía y naranja piña).

### 4.6 Rediseño de Laboratorios Quest

- **Página:** `proyectos/quest.html`
- **Área:** Identidad gráfica
- **Descripción:** Rediseño de la identidad gráfica de Laboratorios Quest para modernizar la marca. Desarrollé un nuevo logotipo y lo apliqué en distintas piezas, con un sistema visual verde y limpio que se reconoce en cada una.
- **Softwares:** Illustrator
- **Piezas:** app, sitio web, espectacular, bolsa, tarjeta y folder.
- **Galería:** 7 imágenes (logotipo y piezas).

### 4.7 Animación 2D para los créditos de Big Hero 6

- **Página:** `proyectos/big-hero-6.html`
- **Área:** Animación
- **Descripción:** Proyecto en equipo en el que animamos en 2D una nueva versión de los créditos de Big Hero 6. Fue un ejercicio de animación para aprender a dar movimiento a ilustraciones y tipografía en After Effects, a partir de piezas creadas en Illustrator.
- **Softwares:** Illustrator, After Effects
- **Trabajo:** en equipo
- **Enlace al video:** <https://youtu.be/tIIzO6nC3mo?si=HLCmwVGLd2eByrEu> (botón «Ver video», solo en la página del proyecto)
- **Galería:** no tiene; en su lugar se muestra el logo en un marco.

---

## 5. Página de proyecto (plantilla)

Cada proyecto tiene su propia página, sobre fondo hueso, con el header fijo arriba (en hueso desde el inicio y con «Proyectos» marcado como activo). Todas siguen la misma plantilla:

1. Arriba a la izquierda, una flecha **«← Volver a proyectos»** que regresa a la sección Proyectos de la página principal.
2. El **área** como texto pequeño y, debajo, el **título del proyecto** en Urbanist Bold mayúsculas, verde fuerte. Si hay reconocimiento, va como etiqueta debajo del título.
3. La **descripción** a la izquierda y un recuadro con los **softwares** (como etiquetas) a la derecha; en celular, uno debajo del otro.
4. Si el proyecto tiene un **enlace extra** (como el video de la animación), va debajo de la descripción como botón píldora con borde rojo.
5. Una **galería de imágenes** con esquinas redondeadas, directo sobre el hueso, que se recorre deslizando hacia los lados (scroll horizontal), con flechas y contador. Las piezas se ven a una escala parecida (las imágenes transparentes van sin márgenes vacíos y los logotipos con aire alrededor).
6. Al tocar una imagen se abre un **visor** a pantalla completa sobre verde fuerte, con su descripción; se recorre con flechas y se cierra con la X o con «Esc».
7. Al final, **«Siguiente proyecto»** con un botón para pasar al siguiente (el último lleva de vuelta al primero), en el mismo orden de la sección Proyectos.
8. **Pie de página** en verde fuerte, con «Volver arriba».

---

## 6. Experiencia

Fondo hueso. Tarjetas **rellenas de verde suave, sin borde**, ordenadas de lo más reciente a lo más antiguo. Cada tarjeta lleva el puesto como título, el lugar y el periodo, y la descripción (en computadora y tablet, la descripción va a la derecha).

### Keep It Custom

- **Puesto:** Cofundador y diseñador
- **Periodo:** Abril 2025 – Actual
- **Descripción:** Proyecto propio de impresión personalizada en textiles que fundé junto con un amigo. Me encargo del arte, la vectorización y la preparación de archivos para impresión, además de asumir responsabilidades creativas y de organización.

### CREACONT

- **Puesto:** Creador de contenido
- **Periodo:** Septiembre 2024 – Diciembre 2025
- **Descripción:** Agencia de publicidad donde desarrollé principalmente parrillas de Instagram y piezas gráficas para redes sociales. Esta experiencia me permitió entender mejor los procesos creativos, el trabajo en equipo y la importancia de comunicar de forma clara y visual.

---

## 7. Contacto

Sección final con fondo verde fuerte.

- **Título:** CONTACTO — Urbanist Bold mayúsculas, verde claro, con su subtítulo.
- Cada dato es una fila que funciona como enlace completo: el ícono dentro de un círculo, el nombre del medio en texto pequeño y el dato. Abre la aplicación correspondiente; las redes se abren en una pestaña nueva.
- 3 por fila en computadora, 2 en tablet y 1 en celular.

| Medio | Texto visible | Enlace |
| --- | --- | --- |
| Correo | javvalencia@gmail.com | `mailto:javvalencia@gmail.com` |
| Teléfono | 55 6219 1967 | `tel:+525562191967` |
| LinkedIn | Javier V. | <https://www.linkedin.com/in/javier-v-46b795307/> |
| Behance | Javier Valencia Vitela | <https://www.behance.net/javiervalenci5> |
| Instagram | @__javier_v | <https://www.instagram.com/__javier_v/> |

---

## 8. Pie de página

- **En la landing:** fondo hueso (después de Contacto, que es verde), con el logo, **Javier Valencia**, «Diseñador gráfico · año» y el botón «Volver arriba», que regresa a la portada.
- **En las páginas de proyecto:** fondo verde fuerte (después del contenido en hueso), con el logo claro y el botón «Volver arriba» en verde claro.

---

## 9. Archivos e imágenes

| Qué | Dónde |
| --- | --- |
| Landing | `index.html` |
| Páginas de proyecto | `proyectos/<proyecto>.html` |
| Estilos y funciones de las páginas de proyecto | `assets/css/proyecto.css`, `assets/js/proyecto.js` |
| Logos de las tarjetas (versión web) | `assets/img/web/logos/` |
| Galerías (versión web) | `assets/img/web/<proyecto>/` |
| Foto (versión web) | `assets/img/foto-javier-web.jpg` |
| Originales (no se publican) | `assets/img/proyectos/`, `assets/img/foto-javier.JPG` |
