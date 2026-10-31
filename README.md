# GeoBIM Soluciones Espaciales — Sitio Web Oficial

Plataforma web institucional y de servicios técnicos especializados para **GeoBIM Soluciones Espaciales S.A.S.**, integrando consultoría SIG (Sistemas de Información Geográfica), modelado y coordinación BIM (Building Information Modeling) e infraestructura de Geoportales territoriales.

---

## 🧭 Estructura del Proyecto

```text
Web GeoBIM/
├── assets/
│   ├── css/
│   │   └── style.css            # Sistema de estilos (Auros dark, tipografías, componentes)
│   ├── js/
│   │   └── main.js              # Interacciones, modal de servicios, esfera 3D, Web3Forms, banners legales
│   └── img/
│       ├── brand/               # Logos oficiales GeoBIM e Ingeniería
│       ├── team/                # Fotografías del equipo multidisciplinario
│       └── services/            # Imágenes de referencia técnica por servicio
├── index.html                   # Página principal interactiva con navegación completa
├── politica_cookies.md          # Política de Tratamiento de Cookies (RGPD / Guía SIC)
├── politica_tratamiento_datos_ley1581.md # Política de Habeas Data (Ley 1581 de 2012)
├── iniciar_servidor.bat         # Script rápido para servidor local en puerto 8000
└── .gitignore                   # Exclusiones de Git
```

---

## 🎨 Identidad Visual y Paleta de Color

Diseñado con una estética técnica de alta precisión (*Auros Dark*):
- **Oro Técnico GeoBIM:** `#E5B800`
- **Fondo Abisal:** `#071213`
- **Superficie de Tarjetas:** `#0D1F21`
- **Acento Primario / Borde:** `#142E31`
- **Verde Azulado Medio:** `#2E5D61`
- **Cian Grisáceo:** `#5E8588`
- **Texto Secundario:** `#A4B9BA`
- **Texto Principal:** `#FFFFFF`

---

## 🛠️ Tecnologías Empleadas

- **HTML5 Semántico + Tailwind CSS (v3 CDN):** Maquetación responsiva y utility-first.
- **Lucide Icons:** Iconografía vectorial técnica y limpia.
- **HTML5 Canvas:** Esfera bioluminiscente interactiva de partículas 3D.
- **Web3Forms API:** Recepción directa y segura de prospectos en `info@solucionesgeobim.com` sin abrir clientes de correo.
- **Cumplimiento Legal Colombiano:**
  - Checkbox obligatorio y modal para la **Ley 1581 de 2012** (Tratamiento de Datos Personales).
  - Banner interactivo de política de cookies persistente en `localStorage`.

---

## 🚀 Despliegue Local

Para levantar el servidor de pruebas local:
1. Ejecuta el archivo `iniciar_servidor.bat` o corre en PowerShell:
   ```powershell
   python -m http.server 8000
   ```
2. Abre tu navegador en:
   ```text
   http://localhost:8000
   ```

---

## 📄 Licencia y Confidencialidad

Propiedad exclusiva de **GeoBIM Soluciones Espaciales S.A.S.** Todos los derechos reservados.
