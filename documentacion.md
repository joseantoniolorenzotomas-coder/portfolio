# Documentación del portfolio

> Este documento detalla la arquitectura, tecnologías, configuración y mantenimiento del portfolio web profesional de **Jose A. Lorenzo**. Debe mantenerse actualizado ante cualquier cambio en el proyecto.

---

## Descripción

El portfolio web es una plataforma personal, moderna y de alto rendimiento diseñada para presentar la trayectoria profesional, habilidades técnicas, proyectos y certificaciones de **Jose A. Lorenzo** como Desarrollador Web Full Stack (Junior). 

El objetivo primordial es ofrecer una presencia online profesional y diferenciada, alejándose de plantillas genéricas mediante un diseño propio en tema oscuro con acentos en rojo fuego (`#ff2800`), navegación fluida, visualizador interactivo de certificados y canales de contacto directo (formulario de correo a `duckdev77@gmail.com`, llamada telefónica, LinkedIn, GitHub y WhatsApp).

---

## Tecnologías utilizadas

El proyecto ha sido desarrollado bajo una filosofía de código limpio, nativo y sin dependencias pesadas:

* **HTML5 semántico**: Estructura accesible (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), metadatos optimizados para SEO y formularios accesibles con atributos de validación.
* **CSS3 moderno**:
  * Variables CSS (`:root`) para temas y diseño consistente.
  * Flexbox y CSS Grid para diagramación fluida y adaptativa.
  * Transiciones cúbicas y animaciones fluidas (`fadeIn`, `scaleIn`, `slideInUp`).
  * Media queries para diseño completamente responsive en móvil, tablet y escritorio.
* **JavaScript (Vanilla ES6+)**:
  * Control del menú responsive en dispositivos móviles.
  * Filtrado dinámico de proyectos por categoría en tiempo real.
  * Visualizador modal unificado para certificados con soporte de cierre por clic y tecla `Escape`.
  * Integración asíncrona del formulario con **FormSubmit AJAX** y fallback automático a cliente de correo (`mailto:`).
  * Observador de intersección (`IntersectionObserver`) para animaciones y contadores al hacer scroll.
* **FormSubmit (API / Endpoint)**: Servicio sin backend propio para la recepción de mensajes enviados a través del formulario de contacto directamente en la bandeja de entrada de `duckdev77@gmail.com`.
* **Herramientas de desarrollo**: Git, GitHub, Visual Studio Code.

---

## Estructura del proyecto

```text
portfolio-web/
├── index.html              # Página principal (One-page completa con todas las secciones)
├── proyectosFull.html      # Página secundaria dedicada a la vista extendida de proyectos
├── AGENTS.md               # Guía de estándares técnicos y reglas para agentes de desarrollo
├── documentacion.md        # Documentación técnica integral del proyecto
├── README.md               # Resumen del repositorio
├── css/
│   └── styles.css          # Hoja de estilos global, variables, temas y media queries
├── js/
│   └── script.js           # Lógica JavaScript nativa (interacciones, modales, envíos)
├── assets/
│   ├── img/                # Logotipo, foto profesional, capturas de proyectos y 10 certificados oficiales
│   │   ├── patoLogoDev.png
│   │   ├── patoLogoDev.webp
│   │   ├── fotocurriculum.jpeg
│   │   ├── devquest-preview.png
│   │   ├── la-magia-de-carol-preview.jpg
│   │   ├── freeduck-translator-preview.png
│   │   ├── logo-la-magia-de-carol.png
│   │   ├── certificado desarrollo con ia.png
│   │   ├── certificadocursa.png
│   │   └── CERTIFICATE_LANDING_PAGE~*.jpg (x8)
│   └── icons/              # Directorio reservado para iconos SVG y recursos gráficos
├── curriculum/             # CV y certificados complementarios en PDF/imagen
└── projects/               # Directorio para subproyectos, demos o código fuente adicional
```

---

## Instalación y ejecución

Al tratarse de una solución estática con JavaScript vanilla, no requiere pasos de compilación ni gestores de paquetes (`npm`, `yarn`):

1. **Abrir directamente en el navegador**:
   Hacer doble clic en `index.html` o abrirlo con cualquier navegador web moderno (Chrome, Safari, Firefox, Edge).
2. **Servidor local (Recomendado para pruebas completas de APIs y Fetch)**:
   * **Con Python 3**:
     ```bash
     cd /Users/joselorenzo/Desktop/portfolio-web
     python3 -m http.server 8000
     ```
     Acceder en el navegador a `http://localhost:8000`.
   * **Con VS Code**: Usar la extensión *Live Server* y hacer clic en *"Go Live"*.

---

## Secciones de la web

1. **Navegación (`.navbar`)**: Barra superior fija con el logotipo de la marca (`JA LT`), enlaces de salto suave (`#inicio`, `#sobre-mi`, `#tecnologias`, `#proyectos`, `#formacion`, `#contacto`) y acceso a `proyectosFull.html`. En pantallas pequeñas se convierte en menú desplegable tipo hamburguesa.
2. **Inicio / Hero (`#inicio`)**: Presentación personal con título de impacto, subtítulo profesional de desarrollador Full Stack Junior, botones de llamada a la acción (CTA) y bloque decorativo de código con el isotipo de la marca.
3. **Sobre mí (`#sobre-mi`)**: Biografía personal, foto profesional tamaño carnet (`assets/img/fotocurriculum.jpeg`, 150×190px, ampliable al pulsar mediante el modal), valores profesionales, intereses (ciencia, anime, artes marciales), accesos directos y estadísticas destacadas (proyectos y clientes).
4. **Tecnologías (`#tecnologias`)**: Cuadrícula de competencias clasificadas en tres bloques: *Frontend* (HTML5, CSS3, JavaScript), *Backend* (Python, Flask, FastAPI) y *Herramientas* (Git/GitHub, VS Code, Responsive Design) con barras de nivel.
5. **Proyectos (`#proyectos`)**: Galería de trabajos con botones de filtrado interactivo (*Todos*, *Frontend*, *Full Stack*, *Python*), tarjetas con etiquetas tecnológicas y enlaces a demostraciones y repositorios.
6. **Formación y Certificados (`#formacion`)**: Línea de tiempo cronológica formativa (Coursera IBM, Coding Academy, DataCamp) y cuadrícula interactiva con los 10 certificados emitidos. Al pulsar sobre cualquier certificado se abre un modal ampliado para su lectura nítida.
7. **Contacto (`#contacto`)**: Canales directos de comunicación:
   * Correo directo (`mailto:joseantoniolorenzotomas@gmail.com`).
   * Teléfono directo (`tel:+34644011966`).
   * Perfil en LinkedIn.
   * Perfil en GitHub.
   * **Formulario de contacto funcional**: Envía notificaciones directas a `joseantoniolorenzotomas@gmail.com` mediante FormSubmit con retroalimentación en pantalla y alternativa automática vía cliente de correo si falla la red.
8. **Pie de página (`.footer`) y Widgets flotantes**:
   * Botón flotante para regresar al inicio de la página.
   * Botón flotante de WhatsApp personalizado con mensaje directo al número `+34 644 011 966`.

---

## Proyectos

### 1. La Magia de Carol (Proyecto Comercial en Producción)
* **Descripción**: Sitio web comercial y de catálogo para empresa de mesas dulces y organización de eventos temáticos (bodas, comuniones, cumpleaños infantiles y celebraciones).
* **Tecnologías**: HTML5 semántico, CSS3 con diseño temático artesanal, JavaScript nativo, Content Security Policy (CSP), GitHub Pages.
* **Funcionalidades**: Catálogo visual interactivo, galería de montajes fotográficos reales, botón flotante de reservas directas por WhatsApp con mensaje preconfigurado, diseño responsive optimizado para dispositivos móviles y arquitectura rápida.
* **Enlaces**:
  * **Demo en vivo**: [https://joseantoniolorenzotomas-coder.github.io/la-magia-de-carol/index.html](https://joseantoniolorenzotomas-coder.github.io/la-magia-de-carol/index.html)
  * **Repositorio GitHub**: [https://github.com/joseantoniolorenzotomas-coder/la-magia-de-carol](https://github.com/joseantoniolorenzotomas-coder/la-magia-de-carol)

### 2. DevQuest
* **Descripción**: Plataforma web gratuita para aprender programación mediante rutas guiadas, lecciones cortas y ejercicios interactivos.
* **Tecnologías**: HTML5, CSS3, JavaScript y GitHub Pages.
* **Funcionalidades**: Rutas disponibles para Python, HTML, CSS, JavaScript y SQL; ejercicios prácticos; progreso guardado automáticamente; sistema de experiencia, rachas, logros y liga; aprendizaje sin anuncios ni límite de tiempo.
* **Captura**: `assets/img/devquest-preview.png`, usada como imagen principal en las tarjetas del proyecto.
* **Enlaces**:
  * **Demo en vivo**: [https://joseantoniolorenzotomas-coder.github.io/DevQuest/](https://joseantoniolorenzotomas-coder.github.io/DevQuest/)
  * **Repositorio GitHub**: [https://github.com/joseantoniolorenzotomas-coder/DevQuest](https://github.com/joseantoniolorenzotomas-coder/DevQuest)

### 3. Freeduck-Translator
* **Descripción**: Traductor web gratuito, sin registro y con modo offline real español-inglés (texto, voz natural y dictado) más 42 idiomas online. PWA instalable en móvil y escritorio con conversación a dos voces.
* **Tecnologías**: HTML5, CSS3, JavaScript vanilla, PWA (Manifest + Service Worker), Web Speech API, motor online MyMemory, GitHub Pages.
* **Funcionalidades**: 42 idiomas online con detección automática (incluidos Català, Galego, Euskara y Valencià); offline ES↔EN tras descarga única; conversación bilingüe con reproducción en voz alta; historial local, atajos de teclado y diseño responsive.
* **Captura**: `assets/img/freeduck-translator-preview.png`, usada como imagen principal en las tarjetas del proyecto.
* **Enlaces**:
  * **Demo en vivo**: [https://joseantoniolorenzotomas-coder.github.io/Freeduck-Translator/](https://joseantoniolorenzotomas-coder.github.io/Freeduck-Translator/)
  * **Repositorio GitHub**: [https://github.com/joseantoniolorenzotomas-coder/Freeduck-Translator](https://github.com/joseantoniolorenzotomas-coder/Freeduck-Translator)

### 4. Task Manager App
* **Descripción**: Aplicación para la gestión organizada de tareas diarias, seguimiento de metas y sincronización en tiempo real.
* **Tecnologías**: Node.js, MongoDB, JavaScript/React.
* **Funcionalidades**: Autenticación de usuarios, creación/edición/eliminación de tareas (CRUD) y estados de progreso.
* **Enlaces**: Demos y código enlazables en `projects/`.

### 5. Portfolio Website
* **Descripción**: El presente sitio web profesional diseñado para destacar habilidades y proyectos de forma rápida y elegante.
* **Tecnologías**: HTML5, CSS3, Vanilla JS.
* **Funcionalidades**: Tema oscuro, animaciones por scroll, modal dinámico de certificados, navegación móvil y formulario con FormSubmit + mailto.
* **Enlaces**: Demo local y repositorio en GitHub.

### 6. Data Analytics Tool
* **Descripción**: Herramienta de visualización y análisis de datos estadísticos para pequeñas empresas y dashboards de métricas.
* **Tecnologías**: Python, Pandas, Flask.
* **Funcionalidades**: Carga de ficheros CSV, generación de gráficos interactivos y exportación de reportes.
* **Enlaces**: Repositorio y demo enlazables.

### 7. Chat Application
* **Descripción**: Aplicación de mensajería instantánea en tiempo real con salas temáticas y notificaciones en pantalla.
* **Tecnologías**: WebSocket, Node.js, JavaScript.
* **Funcionalidades**: Conexión bidireccional continua, almacenamiento de mensajes e interfaz conversacional fluida.
* **Enlaces**: Demos y código enlazables.

### 8. Weather App
* **Descripción**: Aplicación meteorológica que consulta pronósticos globales mediante API REST externa y geolocalización.
* **Tecnologías**: JavaScript, API REST, CSS3.
* **Funcionalidades**: Detección de ubicación geográfica, predicción de 5 días y temas dinámicos según el clima.
* **Enlaces**: Demos y código enlazables.

### 9. CodeCraftHub
* **Descripción**: Plataforma para crear, editar y publicar contenido web con editor en tiempo real y vista previa inmediata. Ideal para desarrolladores y creadores de contenido técnico.
* **Tecnologías**: HTML5, CSS3, JavaScript vanilla, editor basado en DOM, GitHub Pages.
* **Funcionalidades**: Editor en tiempo real con actualización instantánea de la vista previa, escritura de documentación técnica y artículos, plataforma ligera de edición y publicación web, desplegada en GitHub Pages.
* **Enlaces**:
  * **Demo en vivo**: [https://joseantoniolorenzotomas-coder.github.io/CodeCraftHub/](https://joseantoniolorenzotomas-coder.github.io/CodeCraftHub/)
  * **Repositorio GitHub**: [https://github.com/joseantoniolorenzotomas-coder/CodeCraftHub](https://github.com/joseantoniolorenzotomas-coder/CodeCraftHub)

### 10. MetrallaPunk-Radio
* **Descripción**: Radio web online autogestionada, gratuita y sin cuentas. Carga el catálogo propio desde el servidor (<code>catalogo.json</code> + <code>/musica/</code>), reproduce en bucle aleatorio sin parar, con pausa/siguiente/anterior, control de volumen y lista con créditos y atribuciones. Incluye modo local para archivos propios como respaldo. Estética DIY punk con SVG/CSS. Requiere servir por HTTP para cargar el catálogo.
* **Tecnologías**: HTML5, CSS3, JavaScript vanilla, Web Audio API, GitHub Pages.
* **Funcionalidades**: Reproducción continua en bucle aleatorio, catálogo propio cargado desde servidor, controles de pausa/siguiente/anterior y volumen, créditos y atribuciones de temas, modo local para archivos propios, estética DIY punk con SVG y CSS puro, sin registro ni cuentas.
* **Enlaces**:
  * **Demo en vivo**: [https://joseantoniolorenzotomas-coder.github.io/metrallapunk-radio/](https://joseantoniolorenzotomas-coder.github.io/metrallapunk-radio/)
  * **Repositorio GitHub**: [https://github.com/joseantoniolorenzotomas-coder/metrallapunk-radio](https://github.com/joseantoniolorenzotomas-coder/metrallapunk-radio)

---

## Personalización

Si se desea modificar cualquier elemento del portfolio, estos son los archivos y ubicaciones clave:

* **Nombre y Perfil**:
  * Editar los textos en `index.html` y `proyectosFull.html` (etiquetas `<title>`, meta `author`, sección `.hero` y `.about`).
* **Colores y Estilos**:
  * Archivo `css/styles.css`, en la sección `:root`:
    * `--primary-color: #ff2800;` (Color principal de acento)
    * `--bg-body: #0a0a0a;` (Fondo general)
    * `--bg-card: #161616;` (Fondo de tarjetas)
* **Tipografía**:
  * En `css/styles.css` modificar la propiedad `font-family` en el selector `body`.
* **Proyectos**:
  * Agregar o modificar bloques `.project-card` en `index.html` y `proyectosFull.html`, asignando el atributo `data-category` correspondiente (*frontend*, *fullstack*, *python*).
* **Certificados**:
  * Colocar las imágenes en `assets/img/` y registrarlas en `.certificates-grid` en `index.html`. El visualizador modal las abrirá automáticamente sin necesidad de tocar código JS adicional.
* **Destinatario de Correos**:
  * En `index.html` y `proyectosFull.html`: atributo `action="https://formsubmit.co/TU_CORREO"` del `<form>`.
  * En `js/script.js`: variable constante `RECIPIENT_EMAIL = 'TU_CORREO'`.
* **Enlaces Sociales y Teléfono**:
  * Actualizar los enlaces `mailto:`, `tel:`, perfiles de GitHub y LinkedIn en la sección `#contacto` de `index.html` y `proyectosFull.html`.
  * En el script de WhatsApp al final de cada página, modificar la variable `a.href = 'https://wa.me/NUMERO_CON_PREFIJO...'`.

---

## Responsive design

La web implementa una estrategia adaptativa mediante breakpoints cuidadosamente calibrados en `css/styles.css`:

* **Dispositivos móviles (< 768px)**:
  * El menú de navegación se oculta tras un botón hamburguesa animado (`.nav-toggle`).
  * La sección Hero colapsa a una única columna vertical centrada.
  * La cuadrícula de tecnologías y la de proyectos pasa a 1 sola columna para facilitar la lectura y el scroll táctil.
  * Los certificados se muestran en cuadrícula de 2 columnas táctiles.
  * Los botones de contacto y widgets flotantes se ajustan a márgenes reducidos.
* **Tablets (768px - 1024px)**:
  * Cuadrículas de proyectos y certificados distribuidas en 2 y 3 columnas.
  * Sección de contacto dividida fluidamente.
* **Escritorio (> 1024px)**:
  * Menú de navegación horizontal expandido con efectos de hover.
  * Cuadrícula de proyectos en 3 columnas y certificados en 4-5 columnas.
  * Ancho máximo de contenido acotado a 1200px con márgenes automáticos.

---

## Accesibilidad

Se han implementado buenas prácticas de accesibilidad web (a11y):
* **Etiquetado semántico**: Estructura jerárquica con encabezados ordenados (`<h1>` a `<h4>`).
* **Atributos ARIA y roles**:
  * Botón del menú móvil con `aria-label="Toggle menu"`.
  * Ventana modal de certificados con `role="dialog"`, `aria-modal="true"` y `aria-label="Visualizador de certificado"`.
  * Botón de cierre accesible y soporte completo para cierre mediante tecla `Escape`.
* **Formularios**: Etiquetas `<label for="...">` asociadas a cada `<input>` y `<textarea>`.
* **Imágenes**: Textos descriptivos en el atributo `alt` de todas las imágenes y certificados para lectores de pantalla.
* **Contraste de color**: Relación de contraste suficiente entre el texto claro (`#ffffff` / `#d4d4d4`) y el fondo oscuro (`#0a0a0a`).
* **Seguridad en enlaces externos**: Inclusión de `rel="noopener noreferrer"` en los hipervínculos hacia plataformas externas (LinkedIn, GitHub).

---

## SEO

* **Metaetiquetas configuradas en `<head>`**:
  * `charset="UTF-8"` y `viewport` para correcta renderización responsive.
  * `description`: "Portfolio profesional de Jose A. Lorenzo - Desarrollador Web".
  * `author`: "Jose A. Lorenzo".
  * `title`: "Jose A. Lorenzo | Desarrollador Web".
* **Favicon**: Vinculado al icono de marca `assets/img/patoLogoDev.png`.
* **Semántica limpia**: Facilita la indexación por parte de motores de búsqueda.

---

## Pendientes y mejoras futuras

* [ ] Subir proyectos individuales con código fuente propio a subcarpetas de `projects/` o vincular repositorios reales en GitHub.
* [ ] Integrar un selector de cambio de idioma (Español / Inglés).
* [ ] Añadir blog o sección de artículos técnicos.
* [ ] Conectar un dominio personalizado (e.g. `joselorenzodev.com`) y desplegar en GitHub Pages, Netlify o Vercel.

---

## Historial de cambios

### [0.6.5] - 2026-10-30
* **Incorporación de MetrallaPunk-Radio**:
  * Añadida ficha detallada en `proyectosFull.html` con imagen real (`assets/img/metrallapunk-radio.png`), demo y repositorio, categorizada como Frontend.
  * Documentado en `documentacion.md` como proyecto nº10 con tecnologías, funcionalidades y enlaces.

### [0.6.4] - 2026-10-30
* **Incorporación de CodeCraftHub**:
  * Añadida tarjeta en `index.html` con imagen real (`assets/img/codecrafthub.png`), demo y repositorio, categorizada como Frontend.
  * Añadida ficha detallada en `proyectosFull.html` (visión general, funcionalidades, stack y estado).
  * Actualizado contador de "Proyectos Completados" de 3 a 4.
  * Documentado en `documentacion.md` como proyecto nº9 con tecnologías, funcionalidades y enlaces.

### [0.6.3] - 2026-10-16
* **Foto tamaño carnet + ampliable**:
  * `.about-photo` con tamaño fijo de 150×190px (antes `width: 100%`, que en escritorio se mostraba gigante).
  * Clic en la foto abre el modal existente para verla en grande (cierre con ×, clic fuera o `Escape`); también accesible por teclado (`Enter`/`Espacio`).
* **Anti-caché**: `css/styles.css` y `js/script.js` con parámetro `?v=0.6.3` en `index.html` y `proyectosFull.html` para forzar recarga tras cada despliegue.

### [0.6.2] - 2026-10-16
* **Actualización de documentación**:
  * Corregido el árbol de `Estructura del proyecto`: añadidos `fotocurriculum.jpeg`, `freeduck-translator-preview.png`, `logo-la-magia-de-carol.png` y la carpeta `curriculum/`.

### [0.6.1] - 2026-10-16
* **Foto profesional en Sobre mí**:
  * Añadida `assets/img/fotocurriculum.jpeg` al inicio del texto en `#sobre-mi` con marco de acento y bordes redondeados (`.about-photo` en `styles.css`).
  * Centrada automáticamente en móvil/tablet.

### [0.6.0] - 2026-10-16
* **Incorporación de Freeduck-Translator**:
  * Añadida tarjeta en `index.html` con enlaces a demo y repositorio, categorizada como Frontend/PWA.
  * Añadida ficha detallada en `proyectosFull.html` (visión general, funcionalidades offline/online, stack y estado).
  * Actualizado contador de "Proyectos Completados" de 2 a 3.
  * Documentado en `documentacion.md` con tecnologías, funcionalidades y enlaces.

### [0.5.0] - 2026-10-05
* **Incorporación de DevQuest**:
  * Añadida una tarjeta del proyecto a la galería principal, categorizada como Python y enlazada a su demo y repositorio.
  * Añadida su ficha ampliada, con descripción de rutas de aprendizaje, ejercicios, progreso local y gamificación.
  * Actualizada la documentación con sus tecnologías, funcionalidades y enlaces.

### [0.4.0] - 2026-09-30
* **Rediseño completo de la página de proyectos al detalle (`proyectosFull.html`)**:
  * Transformación de la cuadrícula estándar a un formato de **fichas técnicas de gran formato, centradas (`max-width: 950px`) y destacadas**.
  * Expansión exhaustiva del contenido textual para los 6 proyectos, estructurado en:
    * *Visión General y Propósito del Proyecto*.
    * *Características y Funcionalidades Destacadas*.
    * *Stack Tecnológico y Decisiones de Arquitectura*.
    * *Resultados, Estado Actual y Enlaces Directos*.
  * Estilos dedicados en `styles.css` (`.projects-detail-grid`, `.project-detail-card`, `.project-detail-content`, `.project-detail-section`) con tipografía jerárquica y botones prominentes.
  * Compatibilidad total con el sistema de filtrado reactivo por categorías (*Todos*, *Frontend*, *Full Stack*, *Python*).

### [0.3.0] - 2026-09-30
* **Integración del proyecto real en producción "La Magia de Carol"**:
  * Sustitución del primer proyecto de ejemplo por el proyecto comercial real desplegado.
  * Vinculación de la demo funcional en producción ([GitHub Pages](https://joseantoniolorenzotomas-coder.github.io/la-magia-de-carol/index.html)) y su repositorio oficial ([GitHub](https://github.com/joseantoniolorenzotomas-coder/la-magia-de-carol)).
  * Inclusión de miniatura real de mesa dulce (`assets/img/la-magia-de-carol-preview.jpg`) y badge interactivo de proyecto activo ("En vivo 🚀").
  * Soporte visual y estilos CSS en `styles.css` para imágenes reales dentro de `.project-image`.
  * Actualización de fichas en `index.html`, `proyectosFull.html` y `documentacion.md`.

### [0.2.0] - 2026-09-30
* **Reparación del formulario de contacto, hay que solucionar el error dado que e camviado el correo eletronico a duckdev77@gmail.com y no esta responiendo correctamente**:
  * Integración completa con el endpoint de FormSubmit para entregar correos electrónicos directamente en `duckdev77@gmail.com`.
  * Creación de fallback automático a cliente de correo (`mailto:`) en caso de error de red o bloqueo de scripts.
  * Corrección del botón de envío (eliminación de atributo `href` no válido y duplicación de clases).
  * Estados visuales de carga en el botón ("Enviando...") y notificaciones de éxito o error al usuario.
* **Corrección y unificación de modales de certificados**:
  * Creación de un modal único, dinámico y accesible (`#certificateModal`) que muestra a tamaño completo la imagen real del certificado pulsado.
  * Eliminación de modales estáticos inexistentes (`modal5` a `modal10`) y mockups SVG de ejemplo.
  * Soporte para los 10 certificados presentes en el directorio `assets/img/`.
* **Revisión de navegación y enlaces**:
  * Corrección del enlace del isotipo en el navbar hacia `#inicio` e `index.html`.
  * Actualización de la barra de navegación en `proyectosFull.html` para permitir retorno a todas las secciones de la página principal.
  * Ajuste del logo flotante en `proyectosFull.html` para regresar al inicio de proyectos.
  * Corrección de errata en el hero ("JUINOR" corregido a "Junior").
  * Corrección de enlace inválido en `div.skill-icon` dentro de la sección Sobre mí.
  * Adición de atributos `rel="noopener noreferrer"` en enlaces a redes sociales.
* **Documentación técnica**:
  * Redacción completa y profesional de `documentacion.md` según los requerimientos de `AGENTS.md`.

### [0.1.0] - 2026-09-30
* Creación de la estructura base del portfolio, estilos CSS en tema oscuro y catálogo de certificados.
