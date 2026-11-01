/**
 * GeoBIM Soluciones Espaciales — Auros Abyssal Terminal Engine
 * Theme: Abyssal terminal with GeoBIM official brand palette (#E5B800, #2E5D61, #5E8588, #A4B9BA, #D9E2E3, #FFFFFF)
 * Version: 1.0 Enhanced (Desktop & Mobile Optimized)
 */

// Services Data Catalog (Full official brochure scope with technical reference images)
const servicesData = {
  'geo-topografia': {
    category: 'SERVICIOS GEO',
    title: 'Fotogrametría y Topografía',
    image: 'assets/img/services/geo-topografia.jpg',
    summary: 'Captura, procesamiento de alta precisión y modelado digital del relieve.',
    description: 'Levantamientos y procesamiento avanzado de datos geoespaciales con tecnologías de última generación para obtener representaciones fidedignas de la superficie.',
    items: [
      'Procesamiento de ortomosaicos de alta resolución y modelos digitales (DEM / DTM / DSM)',
      'Procesamiento y análisis multiespectral de imágenes satelitales',
      'Topografía no convencional y levantamientos con drones (UAV / RPAS)',
      'Clasificación, filtrado y vectorización de nube de puntos LiDAR'
    ],
    deliverables: 'Ortomosaicos georreferenciados (GeoTIFF), nubes de puntos (.LAS / .LAZ), curvas de nivel y memorias técnicas.',
    applications: 'Minería, infraestructura vial, agricultura de precisión y estudios geotécnicos.'
  },
  'geo-cartografia': {
    category: 'SERVICIOS GEO',
    title: 'Cartografía y Modelos ANLA',
    image: 'assets/img/services/cartografia-modelos-anla.png',
    summary: 'Cartografía temática y estructuración bajo estándares normativos ANLA y POT.',
    description: 'Estructuración integral de bases de datos espaciales y cartografía oficial para cumplimiento riguroso de autoridades ambientales y entes territoriales.',
    items: [
      'Cartografía para Planes de Ordenamiento Territorial (POT, PBOT, EOT)',
      'Generación de cartografía base y temática digital y análoga',
      'Actualización cartográfica catastral y temática',
      'Elaboración del modelo de almacenamiento geográfico bajo especificaciones ANLA',
      'Procesamiento, validación topológica y arquitectura de bases de datos geográficas (Geodatabases)'
    ],
    deliverables: 'File Geodatabases (GDB), capas Shapefile depuradas, salidas gráficas en PDF/DWG y diccionarios de datos.',
    applications: 'Licenciamiento ambiental, consultorías de planeación territorial y entidades públicas.'
  },
  'geo-planeacion': {
    category: 'SERVICIOS GEO',
    title: 'Planeación Territorial y Cambio Climático',
    image: 'assets/img/services/planeacion-cambio-climatico.png',
    summary: 'Evaluación del entorno urbano y gestión del riesgo climático para ordenamiento.',
    description: 'Consultoría técnica para la toma de decisiones territoriales sostenibles, evaluando la dinámica del espacio urbano y la resiliencia climática.',
    items: [
      'Incorporación del componente de cambio climático en instrumentos de planificación municipal',
      'Estudios de dinámica urbana, crecimiento poblacional y densificación',
      'Evaluación del entorno urbano, espacio público y déficit de equipamientos',
      'Zonificación de aptitud y amenazas naturales para desarrollo territorial'
    ],
    deliverables: 'Documentos técnicos de soporte (DTS), mapas de vulnerabilidad y matrices de diagnóstico territorial.',
    applications: 'Alcaldías, gobernaciones, secretarías de planeación y firmas consultoras.'
  },
  'geo-capacitacion': {
    category: 'SERVICIOS GEO',
    title: 'Capacitaciones Especializadas',
    image: 'assets/img/services/capacitacion-especializada.jpg',
    summary: 'Formación corporativa y consultoría estratégica en metodologías SIG y BIM.',
    description: 'Transferencia de conocimiento técnico aplicado y diseño de flujos de trabajo eficientes para equipos de ingeniería, arquitectura y entidades gubernamentales.',
    items: [
      'Capacitación práctica en SIG (ArcGIS Pro, QGIS, bases de datos espaciales)',
      'Capacitación en metodologías y software BIM (Autodesk Revit, Navisworks, gestión IFC)',
      'Asesoría integral en desarrollo e implementación de sistemas SIG corporativos',
      'Estandarización de protocolos y plantillas de trabajo para equipos técnicos'
    ],
    deliverables: 'Talleres prácticos in-situ o remotos, guías metodológicas paso a paso y certificación institucional.',
    applications: 'Empresas de ingeniería, constructoras, universidades y equipos técnicos de proyectos.'
  },
  'geo-visualizacion': {
    category: 'SERVICIOS GEO',
    title: 'Geoportales y Dashboards',
    image: 'assets/img/services/imagen-geovisor.jpg',
    summary: 'Geovisores web interactivos y tableros de control para monitoreo continuo.',
    description: 'Soluciones interactivas en la nube para democratizar el acceso a la información espacial y facilitar el seguimiento visual de indicadores de proyectos.',
    items: [
      'Desarrollo de geoportales y geovisores web dinámicos a medida',
      'Creación de dashboards interactivos de control de proyectos territoriales y constructivos',
      'Integración de capas multicriterio con filtros analíticos y consultas espaciales',
      'Visualización de métricas en tiempo real para gerencia y toma de decisiones'
    ],
    deliverables: 'Aplicaciones web responsive, URLs seguras para clientes y paneles de visualización interactivos.',
    applications: 'Supervisión de obras, difusión pública de proyectos, monitoreo ambiental y gestión de activos.'
  },
  'bim-arquitectura': {
    category: 'SERVICIOS BIM',
    title: 'Modelado Arquitectónico BIM',
    image: 'assets/img/services/bim-arquitectura.png',
    summary: 'Modelos digitales paramétricos de alta fidelidad para diseño y construcción.',
    description: 'Desarrollo de modelos arquitectónicos detallados en entorno BIM (LOD 100 a LOD 400), asegurando coherencia constructiva, cuantificación precisa y planos ejecutivos.',
    items: [
      'Modelado 3D arquitectónico paramétrico bajo normativas constructivas',
      'Generación automatizada de planos constructivos (cortes, fachadas, detalles)',
      'Extracción de cantidades de obra y cómputos métricos confiables',
      'Renderizado y recorridos virtuales para socialización del proyecto'
    ],
    deliverables: 'Archivos nativos .RVT / IFC, planimetría en PDF/DWG y tablas de planificación de materiales.',
    applications: 'Estudios de arquitectura, inmobiliarias y constructoras.'
  },
  'bim-mep': {
    category: 'SERVICIOS BIM',
    title: 'Modelado de Redes MEP',
    image: 'assets/img/services/bim-mep.png',
    summary: 'Coordinación tridimensional de redes mecánicas, eléctricas y de plomería.',
    description: 'Modelado riguroso de instalaciones técnicas para evitar interferencias en obra, optimizar trayectorias y garantizar la operatividad de las edificaciones.',
    items: [
      'Modelado de redes mecánicas y sistemas de ventilación/climatización (HVAC)',
      'Modelado de canalizaciones eléctricas, bandejas portacables e iluminación',
      'Modelado de redes hidrosanitarias, pluviales y sistemas contra incendio',
      'Detección y resolución de colisiones (Clash Detection) con estructura y arquitectura'
    ],
    deliverables: 'Modelos MEP coordinados, informes de interferencias (Navisworks) y planos de taller.',
    applications: 'Instaladores especializados, ingenierías MEP y gerencias de construcción.'
  },
  'bim-estructural': {
    category: 'SERVICIOS BIM',
    title: 'Modelado Estructural',
    image: 'assets/img/services/bim-estructural.png',
    summary: 'Digitalización precisa de elementos portantes de concreto y acero estructural.',
    description: 'Creación de modelos estructurales coordinados con el cálculo de ingeniería, permitiendo el despiece de aceros, verificación de armados y análisis de constructabilidad.',
    items: [
      'Modelado de cimentaciones, columnas, vigas, losas y muros de concreto armado',
      'Modelado de estructuras metálicas, perfiles, conexiones y rigidizadores',
      'Despiece y cuantificación automatizada de acero de refuerzo',
      'Coordinación con modelos arquitectónicos y pases para instalaciones'
    ],
    deliverables: 'Modelo estructural .RVT / IFC, cuadros de acero de refuerzo y planos estructurales coordinados.',
    applications: 'Ingenieros calculistas, talleres de estructuras metálicas y constructoras.'
  },
  'bim-familias': {
    category: 'SERVICIOS BIM',
    title: 'Familias Paramétricas',
    image: 'assets/img/services/bim-familias.png',
    summary: 'Creación de librerías y componentes inteligentes a medida de fabricantes y obra.',
    description: 'Desarrollo de familias paramétricas optimizadas para Revit, con metadatos técnicos, catálogo de dimensiones y comportamiento geométrico configurable.',
    items: [
      'Creación de familias paramétricas de mobiliario, equipos y carpintería',
      'Modelado de catálogos comerciales para fabricantes de productos de construcción',
      'Incorporación de parámetros compartidos para cómputos y especificaciones técnicas',
      'Optimización del peso de los archivos para rendimiento fluido de modelos complejos'
    ],
    deliverables: 'Familias .RFA organizadas por categorías con parámetros técnicos y manual de uso.',
    applications: 'Fabricantes de materiales, empresas de diseño de interiores y firmas de ingeniería.'
  },
  'geobim-entorno': {
    category: 'SERVICIOS GEOBIM',
    title: 'Análisis de Entorno BIM con SIG',
    image: 'assets/img/services/geobim-entorno.png',
    summary: 'Integración del modelo BIM en su contexto territorial y geográfico a escala real.',
    description: 'Fusión de la escala de edificio (BIM) con la escala de territorio (SIG). Permite analizar el impacto de la infraestructura en el entorno circundante y la influencia del relieve en el diseño.',
    items: [
      'Georreferenciación precisa del modelo constructivo en coordenadas de proyección oficiales',
      'Análisis de contexto espacial, visuales urbanas y asoleamiento en el entorno real',
      'Integración de modelos tridimensionales en plataformas SIG como ArcGIS o Cesium',
      'Simulación de volumen construido e integración con el perfil urbano existente'
    ],
    deliverables: 'Escenas 3D georreferenciadas, reportes de impacto volumétrico e integración BIM-GIS.',
    applications: 'Desarrolladores urbanísticos, entidades de planificación y directores de proyectos.'
  },
  'geobim-ambiental': {
    category: 'SERVICIOS GEOBIM',
    title: 'Análisis Ambiental y Sostenibilidad',
    image: 'assets/img/services/analisis-ambiental-sostenibilidad.png',
    summary: 'Evaluación bioclimática, cuencas hídricas y condicionantes ecológicas.',
    description: 'Estudios espaciales integrados para garantizar que el proyecto constructivo respete las determinantes ambientales, zonas de ronda y corredores biológicos.',
    items: [
      'Cruce de huella constructiva con áreas de protección, rondas hídricas y reservas forestales',
      'Análisis de microcuencas, escorrentía superficial y afectaciones por drenajes naturales',
      'Estudios de asoleamiento territorial y sombras proyectadas a lo largo de las estaciones',
      'Aporte al cumplimiento de certificaciones de sostenibilidad (LEED, EDGE) mediante análisis espacial'
    ],
    deliverables: 'Mapas temáticos de restricciones ambientales, análisis de sombras 3D y matriz de cumplimiento ecológico.',
    applications: 'Proyectos con certificación verde, licencias ambientales y planeación de parcelaciones.'
  },
  'geobim-movilidad': {
    category: 'SERVICIOS GEOBIM',
    title: 'Análisis de Accesibilidad y Movilidad',
    image: 'assets/img/services/imagen-accesibilidad.jpg',
    summary: 'Evaluación de redes de transporte, tiempos de desplazamiento y accesibilidad.',
    description: 'Modelado de rutas de acceso al proyecto constructivo considerando la red vial circundante, transporte público, pendientes topográficas y flujos peatonales.',
    items: [
      'Análisis de isócronas (tiempos de desplazamiento a pie, bicicleta o vehículo)',
      'Evaluación de accesibilidad universal y pendientes del terreno natural vs. accesos proyectados',
      'Simulación de impacto vial y puntos críticos de congestión en las inmediaciones',
      'Conectividad con nodos de transporte masivo y ciclorrutas'
    ],
    deliverables: 'Mapas de isócronas, diagramas de conectividad multimodal y estudios de accesibilidad.',
    applications: 'Centros comerciales, hospitales, campus universitarios y proyectos de vivienda masiva.'
  },
  'geobim-servicios': {
    category: 'SERVICIOS GEOBIM',
    title: 'Infraestructura y Redes de Servicios',
    image: 'assets/img/services/geobim-servicios.png',
    summary: 'Conexión entre redes matrices externas y las acometidas del edificio BIM.',
    description: 'Supervisión y cruce tridimensional entre las redes de servicios públicos del territorio (acueducto, alcantarillado, energía, gas) y el sistema MEP interno de la edificación.',
    items: [
      'Cruce de cotas de conexión entre redes matrices municipales y acometidas del proyecto',
      'Evaluación de capacidad y distancia a puntos de empalme de servicios públicos',
      'Mapeo subterráneo de interferencias entre infraestructura existente y nueva',
      'Modelado integral para proyectos de infraestructura lineal (vías, acueductos, tendidos eléctricos)'
    ],
    deliverables: 'Perfil longitudinal de conexiones, planos de empalme 3D e informes de viabilidad de servicios.',
    applications: 'Empresas de servicios públicos, consorcios viales y gerencias técnicas de obra.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Particle Sphere in GeoBIM Colors (Adaptive for Desktop & Mobile)
  initParticleSphere();

  // Mobile drawer navigation
  initMobileMenu();

  // Header scroll appearance & Desktop ScrollSpy
  initScrollHeader();

  // Filter tabs for Services
  initServiceFilters();

  // Service detail modal
  initServiceModals();

  // Multi-select service field
  initMultiSelectService();

  // Success Confirmation Modal
  initSuccessModal();

  // Contact form submission
  initContactForm();

  // Back to Top button
  initBackToTop();

  // Legal Modals & Cookie Banner
  initLegalModals();
  initCookieBanner();
});

/**
 * 3D Particle Sphere Visual (GeoBIM Bioluminescent Data Orb)
 * Rendered using GeoBIM brand colors (#E5B800, #2E5D61, #5E8588, #D9E2E3, #FFFFFF)
 */
function initParticleSphere() {
  const canvas = document.getElementById('hero-particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];
  const particleCount = 1400;
  const radius = 280;

  // Colors strictly mapped to GeoBIM official brand palette
  const colors = [
    'rgba(229, 184, 0, 0.95)',     // GeoBIM Gold #E5B800
    'rgba(245, 206, 45, 0.9)',     // Radiant Gold
    'rgba(46, 93, 97, 0.85)',      // GeoBIM Deep Teal #2E5D61
    'rgba(94, 133, 136, 0.85)',    // GeoBIM Mid Teal #5E8588
    'rgba(217, 226, 227, 0.85)',   // GeoBIM Ice #D9E2E3
    'rgba(255, 255, 255, 0.95)'    // Pure White
  ];

  function resize() {
    const parent = canvas.parentElement;
    width = parent.clientWidth;
    height = Math.min(window.innerHeight * 0.85, 750);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      particles.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        baseX: radius * Math.cos(theta) * Math.sin(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(phi),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 1.6 + 0.8
      });
    }
  }

  let angleX = 0;
  let angleY = 0;
  const rotSpeedX = 0.0015;
  const rotSpeedY = 0.003;

  function render() {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    angleX += rotSpeedX;
    angleY += rotSpeedY;

    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);

    const fov = 420;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Rotate around Y
      let x1 = p.baseX * cosY - p.baseZ * sinY;
      let z1 = p.baseZ * cosY + p.baseX * sinY;

      // Rotate around X
      let y1 = p.baseY * cosX - z1 * sinX;
      let z2 = z1 * cosX + p.baseY * sinX;

      const scale = fov / (fov + z2 + 100);
      const projX = cx + x1 * scale;
      const projY = cy + y1 * scale;

      const alpha = Math.max(0.12, (z2 + radius) / (radius * 2));
      const pSize = Math.max(0.6, p.size * scale);

      ctx.beginPath();
      ctx.arc(projX, projY, pSize, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
    }

    ctx.globalAlpha = 1.0;
    animationFrameId = requestAnimationFrame(render);
  }

  resize();
  createParticles();
  render();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}

/**
 * Mobile Navigation Drawer
 * Smooth overlay, icon toggle (menu <-> x), body lock on open, auto-close on selection.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  function setMenuState(open) {
    if (open) {
      menu.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      document.body.style.overflow = '';
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = menu.classList.contains('hidden');
    setMenuState(isHidden);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      setMenuState(false);
    }
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      setMenuState(false);
    }
  });
}

/**
 * Header Scroll Appearance & ScrollSpy Active Indicators
 */
function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-ghost-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function updateScroll() {
    const scrollY = window.scrollY;

    // Header blur and background
    if (scrollY > 30) {
      header.classList.add('bg-[#071213]/95', 'backdrop-blur-md', 'border-b', 'border-[#142E31]');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-[#071213]/95', 'backdrop-blur-md', 'border-b', 'border-[#142E31]');
      header.classList.add('bg-transparent');
    }

    // ScrollSpy: identify active section
    let currentId = 'inicio';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
}

/**
 * Back to Top Button
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
      btn.classList.remove('hidden-btn');
    } else {
      btn.classList.add('hidden-btn');
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Service Filter Tabs
 */
function initServiceFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach(b => {
        b.classList.remove('bg-[#142E31]', 'text-[#E5B800]');
        b.classList.add('text-[#A4B9BA]');
      });
      btn.classList.add('bg-[#142E31]', 'text-[#E5B800]');
      btn.classList.remove('text-[#A4B9BA]');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * Service Detail Modal
 */
function initServiceModals() {
  const modal = document.getElementById('service-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalQuoteBtn = document.getElementById('modal-quote-btn');

  document.querySelectorAll('.btn-service-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const serviceKey = btn.getAttribute('data-service');
      openModal(serviceKey);
    });
  });

  // Enable opening service modal by tapping anywhere on the service card
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const btn = card.querySelector('.btn-service-detail');
      if (btn) {
        const serviceKey = btn.getAttribute('data-service');
        openModal(serviceKey);
      }
    });
  });

  function openModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-badge').textContent = data.category;
    document.getElementById('modal-desc').textContent = data.description;
    document.getElementById('modal-deliverables').textContent = data.deliverables;
    document.getElementById('modal-apps').textContent = data.applications;

    // Technical Reference Image
    const modalImg = document.getElementById('modal-img');
    const modalImgContainer = document.getElementById('modal-img-container');
    if (modalImg && modalImgContainer) {
      if (data.image) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalImgContainer.classList.remove('hidden');
      } else {
        modalImgContainer.classList.add('hidden');
      }
    }

    const itemsList = document.getElementById('modal-items');
    itemsList.innerHTML = '';
    data.items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start text-xs sm:text-sm text-[#A4B9BA] leading-relaxed';
      li.innerHTML = `
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#E5B800] mr-3 mt-2 flex-shrink-0"></span>
        <span>${item}</span>
      `;
      itemsList.appendChild(li);
    });

    if (modalQuoteBtn) {
      modalQuoteBtn.setAttribute('data-target-service', serviceKey);
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  if (modalQuoteBtn) {
    modalQuoteBtn.addEventListener('click', () => {
      const serviceKey = modalQuoteBtn.getAttribute('data-target-service');
      closeModal();

      if (window.selectServiceInMultiSelect && serviceKey) {
        window.selectServiceInMultiSelect(serviceKey);
      }

      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Global trigger for Geoportal scroll
  window.openGeoportalModal = function() {
    const target = document.getElementById('geoportal');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Global trigger for Geoportal modules (scroll smoothly into view)
  window.openGeoportalModule = function(moduleType) {
    const target = document.getElementById('geoportal');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

/**
 * Multi-Select Service Component
 * Allows selecting multiple divisions/services with live counters, badges and tags.
 */
function initMultiSelectService() {
  const container = document.getElementById('multiselect-container');
  const triggerBtn = document.getElementById('service-select-btn');
  const dropdown = document.getElementById('service-dropdown');
  const chevron = document.getElementById('service-chevron');
  const label = document.getElementById('service-select-label');
  const hiddenInput = document.getElementById('form-service-input');
  const counter = document.getElementById('selected-counter');
  const clearBtn = document.getElementById('clear-services-btn');
  const badgesContainer = document.getElementById('selected-badges-container');
  const checkboxes = document.querySelectorAll('.service-checkbox');

  if (!container || !triggerBtn || !dropdown) return;

  function toggleDropdown(show) {
    const isHidden = dropdown.classList.contains('hidden');
    const shouldOpen = show !== undefined ? show : isHidden;

    if (shouldOpen) {
      dropdown.classList.remove('hidden');
      triggerBtn.setAttribute('aria-expanded', 'true');
      if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
      dropdown.classList.add('hidden');
      triggerBtn.setAttribute('aria-expanded', 'false');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
  }

  triggerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  });

  // Close when clicking outside dropdown
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      toggleDropdown(false);
    }
  });

  function updateSelected() {
    const selected = [];
    checkboxes.forEach(cb => {
      if (cb.checked) {
        selected.push({
          value: cb.value,
          key: cb.getAttribute('data-key')
        });
      }
    });

    const values = selected.map(s => s.value);
    if (hiddenInput) {
      hiddenInput.value = values.join(', ');
    }

    if (selected.length === 0) {
      if (label) {
        label.textContent = 'Seleccione una o varias divisiones...';
        label.classList.remove('text-[#FFFFFF]');
        label.classList.add('text-[#5E8588]');
      }
      if (counter) counter.textContent = '0 seleccionados';
      if (badgesContainer) {
        badgesContainer.innerHTML = '';
        badgesContainer.classList.add('hidden');
      }
    } else if (selected.length === 1) {
      if (label) {
        label.textContent = selected[0].value;
        label.classList.add('text-[#FFFFFF]');
        label.classList.remove('text-[#5E8588]');
      }
      if (counter) counter.textContent = '1 seleccionado';
      renderBadges(selected);
    } else {
      if (label) {
        label.textContent = `${selected.length} divisiones seleccionadas`;
        label.classList.add('text-[#FFFFFF]');
        label.classList.remove('text-[#5E8588]');
      }
      if (counter) counter.textContent = `${selected.length} seleccionados`;
      renderBadges(selected);
    }
  }

  function renderBadges(selected) {
    if (!badgesContainer) return;
    badgesContainer.innerHTML = '';
    badgesContainer.classList.remove('hidden');

    selected.forEach(s => {
      const badge = document.createElement('span');
      badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#142E31] border border-[rgba(229,184,0,0.35)] text-xs text-[#E5B800] font-matter';
      badge.innerHTML = `
        <span class="truncate max-w-[210px]">${s.value}</span>
        <button type="button" data-key="${s.key}" class="remove-badge-btn hover:text-[#FFFFFF] focus:outline-none cursor-pointer" title="Quitar">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M1 1L9 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      `;
      badgesContainer.appendChild(badge);
    });

    badgesContainer.querySelectorAll('.remove-badge-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.getAttribute('data-key');
        const cb = document.querySelector(`.service-checkbox[data-key="${key}"]`);
        if (cb) {
          cb.checked = false;
          updateSelected();
        }
      });
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      updateSelected();
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      checkboxes.forEach(cb => cb.checked = false);
      updateSelected();
    });
  }

  // Global helper to select single service from modal
  window.selectServiceInMultiSelect = function(serviceKey) {
    checkboxes.forEach(cb => {
      if (cb.getAttribute('data-key') === serviceKey) {
        cb.checked = true;
      }
    });
    updateSelected();
  };

  // Global helper to reset multiselect on form reset
  window.resetMultiSelect = function() {
    checkboxes.forEach(cb => cb.checked = false);
    updateSelected();
  };
}

/**
 * Form Success Modal Component
 */
function initSuccessModal() {
  const modal = document.getElementById('form-success-modal');

  window.openSuccessModal = function() {
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  };

  window.closeSuccessModal = function() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      window.closeSuccessModal();
    }
  });
}

/**
 * Contact Form Submission with Web3Forms & Mailto fallback
 */
function initContactForm() {
  const form = document.getElementById('quote-form');
  const statusMsg = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  // Track initial render timestamp for anti-bot speed verification
  const formRenderTime = Date.now();
  const renderTimeInput = document.getElementById('form-render-time');
  if (renderTimeInput) {
    renderTimeInput.value = formRenderTime.toString();
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Anti-Bot Honeypot verification
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck && (botcheck.checked || (botcheck.value && botcheck.value !== ''))) {
      console.warn('Bot detection: honeypot triggered.');
      showStatus('Solicitud recibida exitosamente.', 'success');
      form.reset();
      return;
    }

    // 2. Anti-Bot Submission speed verification (< 2.0 seconds)
    const timeElapsed = Date.now() - formRenderTime;
    if (timeElapsed < 2000) {
      showStatus('Por favor complete su solicitud a un ritmo natural para verificación de seguridad.', 'error');
      return;
    }

    // 3. Client-Side Rate Limiting (max 5 submissions per 15 min, min 15s cooldown)
    const RATE_KEY = 'geobim_form_submissions';
    const now = Date.now();
    let submissions = [];
    try {
      submissions = JSON.parse(localStorage.getItem(RATE_KEY) || '[]');
      if (!Array.isArray(submissions)) submissions = [];
    } catch (err) {
      submissions = [];
    }
    // Retain only timestamps from the last 15 minutes (900,000 ms)
    submissions = submissions.filter(ts => (now - ts) < 900000);

    if (submissions.length > 0) {
      const lastSub = submissions[submissions.length - 1];
      if (now - lastSub < 15000) {
        showStatus('Por favor espere unos segundos antes de enviar una nueva solicitud.', 'error');
        return;
      }
    }

    if (submissions.length >= 5) {
      showStatus('Ha alcanzado el límite de solicitudes recientes. Por favor intente más tarde o contáctenos por WhatsApp.', 'error');
      return;
    }

    const name = form.nombre.value.trim();
    const email = form.email.value.trim();
    const phone = form.telefono.value.trim();
    const serviceInput = document.getElementById('form-service-input');
    const serviceText = serviceInput ? serviceInput.value.trim() : '';
    const message = form.mensaje.value.trim();
    const terminosCheck = document.getElementById('ley-1581-check');

    if (!name || !email || !phone || !message || !serviceText) {
      showStatus('Por favor completa todos los campos requeridos (*), incluyendo al menos una División / Servicio.', 'error');
      if (!serviceText) {
        const triggerBtn = document.getElementById('service-select-btn');
        if (triggerBtn) {
          triggerBtn.classList.add('border-red-500');
          setTimeout(() => triggerBtn.classList.remove('border-red-500'), 3000);
        }
      }
      return;
    }

    if (terminosCheck && !terminosCheck.checked) {
      showStatus('Debe autorizar el tratamiento de datos personales conforme a la Ley 1581 de 2012 para transmitir su solicitud.', 'error');
      terminosCheck.focus();
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>TRANSMITIENDO SOLICITUD...</span>`;

    try {
      const formData = new FormData(form);
      formData.set('servicio', serviceText);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();

      if (response.status === 200 && result.success) {
        submissions.push(now);
        try {
          localStorage.setItem(RATE_KEY, JSON.stringify(submissions));
        } catch (err) {}
        showStatus('Solicitud recibida exitosamente. Nuestro equipo técnico responderá en menos de 24 horas hábiles.', 'success');
        form.reset();
        if (window.resetMultiSelect) {
          window.resetMultiSelect();
        }
        if (window.openSuccessModal) {
          window.openSuccessModal();
        }
      } else {
        triggerMailto(name, email, phone, serviceText, message);
        showStatus('Se ha abierto su cliente de correo para enviar directamente a info@solucionesgeobim.com.', 'info');
      }
    } catch (err) {
      triggerMailto(name, email, phone, serviceText, message);
      showStatus('Se ha abierto su cliente de correo para enviar directamente a info@solucionesgeobim.com.', 'info');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function triggerMailto(name, email, phone, service, message) {
    const subject = encodeURIComponent(`Solicitud Proyecto GeoBIM: ${service} - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${phone}\n` +
      `Divisiones / Servicios solicitados:\n${service}\n\n` +
      `Detalles del proyecto:\n${message}\n\n` +
      `Consentimiento Ley 1581 de 2012: Autorizado por el titular.`
    );
    window.location.href = `mailto:info@solucionesgeobim.com?subject=${subject}&body=${body}`;
  }

  function showStatus(text, type) {
    if (!statusMsg) return;
    statusMsg.classList.remove('hidden');
    if (type === 'error') {
      statusMsg.className = 'p-4 sm:p-5 rounded-[8px] text-sm sm:text-base mb-6 font-matter border border-red-500/50 bg-red-950/80 text-red-200 flex items-center gap-3';
      statusMsg.innerHTML = `
        <svg class="w-6 h-6 flex-shrink-0 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span>${text}</span>
      `;
    } else if (type === 'info') {
      statusMsg.className = 'p-4 sm:p-5 rounded-[8px] text-sm sm:text-base mb-6 font-matter border border-[#2E5D61] bg-[#142E31] text-[#D9E2E3] flex items-center gap-3';
      statusMsg.innerHTML = `
        <svg class="w-6 h-6 flex-shrink-0 text-[#E5B800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span>${text}</span>
      `;
    } else {
      statusMsg.className = 'p-5 sm:p-6 rounded-[8px] text-base sm:text-lg mb-6 font-matter border-2 border-[#E5B800] bg-[#142E31] text-[#FFFFFF] shadow-[0_0_25px_rgba(229,184,0,0.25)] flex items-start sm:items-center gap-3.5';
      statusMsg.innerHTML = `
        <svg class="w-7 h-7 flex-shrink-0 text-[#E5B800] mt-0.5 sm:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <div>
          <strong class="block text-[#E5B800] text-base sm:text-lg font-medium mb-1">Solicitud Recibida Exitosamente</strong>
          <span class="text-[#D9E2E3] text-sm sm:text-base leading-relaxed">Nuestro equipo técnico responderá en menos de 24 horas hábiles.</span>
        </div>
      `;
    }
  }
}

/**
 * Legal Modals (Ley 1581 Data Protection & Cookies Policy)
 */
function initLegalModals() {
  const dataPolicyModal = document.getElementById('data-policy-modal');
  const cookiesModal = document.getElementById('cookies-modal');

  window.openDataPolicyModal = function() {
    if (dataPolicyModal) {
      dataPolicyModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeDataPolicyModal = function() {
    if (dataPolicyModal) {
      dataPolicyModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  window.openCookiesPolicyModal = function() {
    if (cookiesModal) {
      cookiesModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCookiesPolicyModal = function() {
    if (cookiesModal) {
      cookiesModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDataPolicyModal();
      closeCookiesPolicyModal();
    }
  });
}

/**
 * Cookie Consent Management & Conditioning
 */
const CONSENT_STORAGE_KEY = 'geobim_cookies_consent';

window.hasConsent = function(category) {
  if (category === 'essential') return true;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed[category]);
  } catch (e) {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === 'all';
  }
};

window.setConsentChoice = function(choice) {
  const banner = document.getElementById('cookie-banner');
  const consentData = {
    essential: true,
    preferences: choice === 'all',
    analytics: choice === 'all',
    timestamp: Date.now()
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
  } catch (err) {}

  if (choice === 'essential') {
    try {
      sessionStorage.removeItem('geobim_telemetry');
      localStorage.removeItem('geobim_analytics_session');
    } catch (err) {}
  }

  if (banner) {
    banner.classList.add('hidden');
  }

  window.dispatchEvent(new CustomEvent('geobim:consent_updated', { detail: consentData }));
};

window.openCookieBannerPreferences = function() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.remove('hidden');
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  let consent = null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw) consent = JSON.parse(raw);
  } catch (e) {
    consent = localStorage.getItem(CONSENT_STORAGE_KEY);
  }

  if (!consent) {
    setTimeout(() => {
      banner.classList.remove('hidden');
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 1200);
  }

  const acceptAllBtn = document.getElementById('cookie-accept-all');
  const acceptEssBtn = document.getElementById('cookie-accept-essential');

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => {
      window.setConsentChoice('all');
    });
  }

  if (acceptEssBtn) {
    acceptEssBtn.addEventListener('click', () => {
      window.setConsentChoice('essential');
    });
  }
}
