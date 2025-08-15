# LSSDIGI - Landing "Coming Soon" Misteriosa

**URL de despliegue:** [https://TUUSUARIO.github.io/ssdigi-coming-soon](https://TUUSUARIO.github.io/ssdigi-coming-soon)  
**Dominio personalizado:** [https://ssdigi.store](https://ssdigi.store)

---

## 📜 Descripción

Landing minimalista y oscura inspirada en **Black Mirror** y **Death Stranding** para anunciar el lanzamiento de **LSSDIGI** de forma misteriosa.  
Incluye un **contador falso**, **frases rotativas inquietantes** y **efecto glitch**, con fondo animado de ruido para generar intriga.

Este sitio está pensado para campañas en redes sociales antes del lanzamiento oficial de la tienda, con el objetivo de generar expectativa y curiosidad.

---

## 🏗️ Arquitectura del Proyecto

Proyecto estático (HTML, CSS y JavaScript puro) para ser desplegado en **GitHub Pages**.

📂 / (raíz del repositorio)
├── index.html # Página principal con la estructura del landing
├── style.css # Estilos del sitio (puede estar inline en index.html)
├── script.js # Funciones para el contador y frases
├── CNAME # Archivo con el dominio personalizado (ssdigi.store)
└── README.md # Documentación del proyecto


---

## ⚙️ Funcionalidades

1. **Contador falso**
   - Genera horas, minutos y segundos aleatorios.
   - Refresca cada segundo para simular un tiempo límite incierto.

2. **Frases rotativas**
   - Array de frases misteriosas.
   - Cambia de frase cada 4 segundos para mantener la intriga.

3. **Efecto glitch en título**
   - Animación CSS sobre el texto principal.
   - Cambios de sombra de texto para simular distorsión.

4. **Fondo de ruido animado**
   - Imagen PNG repetida con opacidad baja.
   - Movimiento continuo para simular interferencia.

---

## 🚀 Despliegue en GitHub Pages

1. Subir los archivos al repositorio.
2. Ir a **Settings → Pages** y configurar:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Guardar y esperar a que GitHub genere la URL.
4. (Opcional) En el campo **Custom domain**, agregar:



---

## 📌 Notas de Mantenimiento

- Para cambiar frases → editar el array `phrases` en `script.js` o dentro del `<script>` en `index.html`.
- Para cambiar el estilo → modificar directamente el bloque `<style>` o el archivo `style.css`.
- Para actualizar el dominio → editar el archivo `CNAME` con el nuevo dominio.
- Para mejorar la campaña en redes sociales → actualizar meta tags Open Graph (`og:title`, `og:description`, `og:image`) en el `<head>`.

---

## 🖤 Créditos

Desarrollado para **LSSDIGI** como parte de la estrategia de pre-lanzamiento.  
Inspiración visual: *Black Mirror*, *Death Stranding*.

