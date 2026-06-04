export const excludedRepos = ['about-me'];

export const categories = [
  {
    id: 'embedded',
    label: { es: 'Firmware & Embedded', en: 'Firmware & Embedded' },
    description: {
      es: 'C/C++, microcontroladores, entornos RTOS y bajo nivel.',
      en: 'C/C++, microcontrollers, RTOS environments and low-level work.'
    }
  },
  {
    id: 'iot',
    label: { es: 'IoT & Hardware', en: 'IoT & Hardware' },
    description: {
      es: 'ESP32, Arduino, matrices LED, sensores y dispositivos físicos.',
      en: 'ESP32, Arduino, LED matrices, sensors and physical devices.'
    }
  },
  {
    id: 'wearables',
    label: { es: 'Wear OS & Mobile', en: 'Wear OS & Mobile' },
    description: {
      es: 'Experimentos para reloj, tiles y experiencias móviles ligeras.',
      en: 'Watch experiments, tiles and lightweight mobile experiences.'
    }
  },
  {
    id: 'finance',
    label: { es: 'Finanzas & Datos', en: 'Finance & Data' },
    description: {
      es: 'Scraping, análisis fundamental y herramientas de investigación financiera.',
      en: 'Scraping, fundamental analysis and financial research tools.'
    }
  },
  {
    id: 'web',
    label: { es: 'Web & Apps', en: 'Web & Apps' },
    description: {
      es: 'Aplicaciones TypeScript/JavaScript y prototipos de producto.',
      en: 'TypeScript/JavaScript applications and product prototypes.'
    }
  },
  {
    id: 'games',
    label: { es: 'Juegos & Retro', en: 'Games & Retro' },
    description: {
      es: 'Game Boy, Nintendo DS, terminal UI y desarrollo lúdico.',
      en: 'Game Boy, Nintendo DS, terminal UI and playful development.'
    }
  },
  {
    id: 'tools',
    label: { es: 'Tools & Automatización', en: 'Tools & Automation' },
    description: {
      es: 'Utilidades, clasificadores, extractores y flujos de productividad.',
      en: 'Utilities, classifiers, extractors and productivity workflows.'
    }
  },
  {
    id: 'misc',
    label: { es: 'Experimentos & Misc', en: 'Experiments & Misc' },
    description: {
      es: 'Laboratorios creativos, pruebas y proyectos difíciles de encasillar.',
      en: 'Creative labs, tests and projects that do not fit neatly elsewhere.'
    }
  }
];

export const curatedProjects = [
  {
    name: 'arfiOS-m5stickc',
    category: 'embedded',
    languageFallback: 'C++',
    license: 'MIT',
    updatedAt: '2026-06-04',
    featured: true,
    maturity: 'lab',
    description: {
      es: 'Microinterfaz experimental para M5StickC orientada a menús, estado del dispositivo y prototipado rápido en C++.',
      en: 'Experimental micro-interface for M5StickC focused on menus, device state and rapid C++ prototyping.'
    },
    tags: ['M5StickC', 'C++', 'Embedded', 'UI']
  },
  {
    name: 'm5stickc-playground',
    category: 'embedded',
    languageFallback: 'C++',
    updatedAt: '2026-06-03',
    featured: true,
    maturity: 'lab',
    description: {
      es: 'Sandbox para probar periféricos, pantallas, patrones de firmware y pequeñas ideas sobre M5StickC.',
      en: 'Sandbox for testing peripherals, displays, firmware patterns and small ideas on M5StickC.'
    },
    tags: ['M5StickC', 'Firmware', 'C++', 'Prototyping']
  },
  {
    name: 'wearos_playground',
    category: 'wearables',
    languageFallback: 'Kotlin',
    license: 'MIT',
    updatedAt: '2026-06-02',
    featured: true,
    maturity: 'template',
    description: {
      es: 'Plantilla y laboratorio Kotlin para explorar apps y tiles en Wear OS.',
      en: 'Kotlin template and lab for exploring Wear OS apps and tiles.'
    },
    tags: ['Wear OS', 'Kotlin', 'Android', 'Template']
  },
  {
    name: 'madrid-on-your-wrist',
    category: 'wearables',
    languageFallback: 'Kotlin',
    updatedAt: '2026-06-02',
    featured: false,
    maturity: 'seed',
    description: {
      es: 'Concepto para llevar información útil de Madrid a un reloj o dispositivo wearable.',
      en: 'Concept for bringing useful Madrid information to a watch or wearable device.'
    },
    tags: ['Wearables', 'Madrid', 'Kotlin', 'Concept']
  },
  {
    name: 'gba-back-home',
    category: 'games',
    languageFallback: 'C++',
    license: 'MIT',
    updatedAt: '2026-06-02',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Experimento de juego retro para Game Boy Advance con foco en lógica de bajo nivel y loop de juego.',
      en: 'Retro Game Boy Advance experiment focused on low-level logic and game loops.'
    },
    tags: ['GBA', 'C++', 'Retro', 'Game Dev']
  },
  {
    name: 'open-idotmatrix',
    category: 'iot',
    languageFallback: 'Python',
    license: 'MIT',
    updatedAt: '2026-06-01',
    featured: true,
    maturity: 'active',
    description: {
      es: 'Control y automatización abierta para pantallas iDotMatrix/LED matrix usando Python.',
      en: 'Open control and automation for iDotMatrix/LED matrix displays using Python.'
    },
    tags: ['Python', 'LED Matrix', 'Hardware', 'Automation']
  },
  {
    name: 'thinkpad-energy-manager',
    category: 'tools',
    languageFallback: 'Python',
    license: 'MIT',
    updatedAt: '2026-05-31',
    featured: true,
    maturity: 'active',
    description: {
      es: 'Utilidad para gestionar perfiles de energía y batería en ThinkPad, pensada para flujos Linux/productividad.',
      en: 'Utility for managing ThinkPad power and battery profiles, aimed at Linux/productivity workflows.'
    },
    tags: ['Python', 'Linux', 'ThinkPad', 'Power']
  },
  {
    name: 'gb-eyenaut-adventures',
    category: 'games',
    languageFallback: 'C',
    updatedAt: '2026-05-29',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Prototipo de aventura retro para Game Boy con C y restricciones reales de plataforma.',
      en: 'Retro Game Boy adventure prototype in C with real platform constraints.'
    },
    tags: ['Game Boy', 'C', 'Retro', 'Game Dev']
  },
  {
    name: 'natural-keyword-classifier',
    category: 'tools',
    languageFallback: 'JavaScript',
    updatedAt: '2026-05-27',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Clasificador ligero de keywords en lenguaje natural para etiquetado, rutas o automatización de contenido.',
      en: 'Lightweight natural-language keyword classifier for tagging, routing or content automation.'
    },
    tags: ['JavaScript', 'NLP', 'Classifier', 'Automation']
  },
  {
    name: 'dos-banderas',
    category: 'web',
    languageFallback: 'TypeScript',
    updatedAt: '2026-05-27',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Proyecto TypeScript de interfaz interactiva con mecánicas visuales y estado dual.',
      en: 'TypeScript project for an interactive interface with visual mechanics and dual-state logic.'
    },
    tags: ['TypeScript', 'UI', 'Interactive', 'Web']
  },
  {
    name: 'epub-cutter2sum',
    category: 'tools',
    languageFallback: 'TypeScript',
    updatedAt: '2026-05-24',
    featured: false,
    maturity: 'active',
    description: {
      es: 'Herramienta para dividir o preparar contenido EPUB de cara a flujos de resumen y procesamiento de texto.',
      en: 'Tool for splitting or preparing EPUB content for summarization and text-processing workflows.'
    },
    tags: ['TypeScript', 'EPUB', 'Text Processing', 'Tooling']
  },
  {
    name: 'open-bistimulation',
    category: 'web',
    languageFallback: 'TypeScript',
    license: 'MIT',
    updatedAt: '2026-05-23',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Prototipo abierto en TypeScript para secuencias configurables y experimentación interactiva.',
      en: 'Open TypeScript prototype for configurable sequences and interactive experimentation.'
    },
    tags: ['TypeScript', 'Open Source', 'Interactive', 'Prototype']
  },
  {
    name: 'joycon-tester-lab',
    category: 'iot',
    languageFallback: 'JavaScript',
    license: 'MIT',
    updatedAt: '2026-05-21',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Laboratorio para probar eventos, estado y comportamiento de mandos Nintendo Joy-Con desde JavaScript.',
      en: 'Lab for testing Nintendo Joy-Con events, state and behavior from JavaScript.'
    },
    tags: ['JavaScript', 'Joy-Con', 'Input', 'Hardware']
  },
  {
    name: 'hellonds',
    category: 'games',
    languageFallback: 'C',
    updatedAt: '2026-05-19',
    featured: true,
    maturity: 'reference',
    description: {
      es: 'Proyecto de referencia para desarrollo Nintendo DS y pruebas de toolchain homebrew.',
      en: 'Reference project for Nintendo DS development and homebrew toolchain testing.'
    },
    tags: ['Nintendo DS', 'C', 'Homebrew', 'Reference']
  },
  {
    name: 'vector-lab',
    category: 'web',
    languageFallback: 'TypeScript',
    updatedAt: '2026-05-10',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Laboratorio TypeScript para vectores, geometría, visualización y pequeños experimentos gráficos.',
      en: 'TypeScript lab for vectors, geometry, visualization and small graphics experiments.'
    },
    tags: ['TypeScript', 'Vectors', 'Graphics', 'Math']
  },
  {
    name: 'fundamentracker',
    category: 'finance',
    languageFallback: 'Python',
    updatedAt: '2026-05-09',
    featured: true,
    maturity: 'active',
    description: {
      es: 'Tracker en Python para datos de análisis fundamental y seguimiento de compañías.',
      en: 'Python tracker for fundamental-analysis data and company monitoring.'
    },
    tags: ['Python', 'Finance', 'Fundamentals', 'Tracking']
  },
  {
    name: 'open-habits',
    category: 'web',
    languageFallback: 'TypeScript',
    updatedAt: '2026-05-09',
    featured: false,
    maturity: 'active',
    description: {
      es: 'Aplicación abierta de hábitos para seguimiento personal, rutinas y consistencia.',
      en: 'Open habit app for personal tracking, routines and consistency.'
    },
    tags: ['TypeScript', 'Habits', 'Productivity', 'App']
  },
  {
    name: 'fundamentopedia',
    category: 'finance',
    languageFallback: 'TypeScript',
    updatedAt: '2026-03-15',
    featured: true,
    maturity: 'active',
    description: {
      es: 'Base de conocimiento sobre análisis fundamental, conceptos financieros y métricas de inversión.',
      en: 'Knowledge base for fundamental analysis, financial concepts and investing metrics.'
    },
    tags: ['TypeScript', 'Finance', 'Knowledge Base', 'Investing']
  },
  {
    name: 'tikr-scraper',
    category: 'finance',
    languageFallback: 'JavaScript',
    updatedAt: '2026-02-26',
    featured: false,
    maturity: 'tool',
    description: {
      es: 'Scraper JavaScript para apoyar flujos de investigación financiera y extracción de datos.',
      en: 'JavaScript scraper supporting financial research and data-extraction workflows.'
    },
    tags: ['JavaScript', 'Scraping', 'Finance', 'Data']
  },
  {
    name: 'fundamental-analyzer',
    category: 'finance',
    languageFallback: 'TypeScript',
    updatedAt: '2026-02-12',
    featured: true,
    maturity: 'active',
    description: {
      es: 'Aplicación TypeScript para analizar fundamentales de empresas, ratios y señales de inversión.',
      en: 'TypeScript app for analyzing company fundamentals, ratios and investing signals.'
    },
    tags: ['TypeScript', 'Finance', 'Analysis', 'Dashboard']
  },
  {
    name: 'fundamentools',
    category: 'finance',
    languageFallback: 'JavaScript',
    updatedAt: '2026-02-11',
    featured: false,
    maturity: 'tool',
    description: {
      es: 'Colección de utilidades JavaScript para análisis fundamental y automatización de investigación.',
      en: 'Collection of JavaScript utilities for fundamental analysis and research automation.'
    },
    tags: ['JavaScript', 'Finance', 'Utilities', 'Research']
  },
  {
    name: 'fintab_analizer',
    category: 'finance',
    languageFallback: 'JavaScript',
    updatedAt: '2026-01-25',
    featured: false,
    maturity: 'tool',
    description: {
      es: 'Extractor de estados financieros desde estructuras de tabla fintab.',
      en: 'Financial-statement extractor from fintab table structures.'
    },
    tags: ['JavaScript', 'Finance', 'Extractor', 'Tables']
  },
  {
    name: 'processing_playground',
    category: 'misc',
    languageFallback: 'Processing',
    updatedAt: '2025-12-24',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Sketches de creative coding con Processing para explorar visuales, interacción y prototipos rápidos.',
      en: 'Creative-coding sketches with Processing for visuals, interaction and rapid prototypes.'
    },
    tags: ['Processing', 'Creative Coding', 'Graphics', 'Playground']
  },
  {
    name: 'ncurses_games',
    category: 'games',
    languageFallback: 'C++',
    updatedAt: '2025-12-24',
    featured: false,
    maturity: 'lab',
    description: {
      es: 'Experimentos de juegos de terminal en C++ usando ncurses.',
      en: 'Terminal game experiments in C++ using ncurses.'
    },
    tags: ['C++', 'ncurses', 'Terminal', 'Games']
  },
  {
    name: 'esp32_car',
    category: 'iot',
    languageFallback: 'C++',
    updatedAt: '2025-12-07',
    featured: true,
    maturity: 'lab',
    description: {
      es: 'Proyecto de coche/robot basado en ESP32 para control, firmware y pruebas de hardware.',
      en: 'ESP32-based car/robot project for control, firmware and hardware tests.'
    },
    tags: ['ESP32', 'C++', 'Robotics', 'Firmware']
  },
  {
    name: 'JustAnotherSimpleTile',
    category: 'wearables',
    languageFallback: 'Kotlin',
    updatedAt: '2025-02-23',
    featured: false,
    maturity: 'reference',
    description: {
      es: 'Ejemplo de tile para Wear OS en SDK 30.',
      en: 'Wear OS tile example for SDK 30.'
    },
    tags: ['Kotlin', 'Wear OS', 'Tile', 'SDK 30']
  },
  {
    name: 'pomoduino',
    category: 'iot',
    languageFallback: 'C++',
    license: 'MIT',
    updatedAt: '2024-12-02',
    featured: true,
    maturity: 'active',
    description: {
      es: 'Temporizador Pomodoro basado en Arduino con displays TM1637, encoder rotatorio y LEDs de estado.',
      en: 'Arduino-based Pomodoro timer with TM1637 displays, rotary encoder and status LEDs.'
    },
    tags: ['Arduino', 'C++', 'TM1637', 'Pomodoro']
  }
];
