# 📊 BABYLON-FINANCIAL-AGENT
## Calculadora Inteligente de Costos Internos y de Facturación/Cotización Externa
### Ecosistema Autónomo BABYLON.IA (Arquitectura Geist SOTA)

---

## 📌 1. Visión General e Impacto Estratégico

El **BABYLON-FINANCIAL-AGENT** es una solución corporativa de facturación, cálculo de costos y cotización comercial orientada a pymes de base tecnológica (hasta 50 empleados). Diseñado bajo la **Arquitectura Geist** de automejora iterativa y regulado por las **Leyes de la Psicohistoria de Asimov**, este agente opera de manera local garantizando una total hermeticidad de los datos.

En el mercado moderno de Inteligencia Artificial B2B, la principal fricción para los gerentes y directores de tecnología es la **fuga de datos corporativos a la nube**. Este agente resuelve dicho cuello de botella de raíz:

* **Privacidad de Grado Militar**: 100% aislado. Tu información financiera, márgenes de ganancia y tarifas de clientes no se envían a nubes públicas como OpenAI o Anthropic.
* **Costo Cero por Tokens**: Al integrarse con modelos locales a través de Ollama y el Gemini CLI OAuth Bridge, elimina las facturas recurrentes de APIs comerciales.
* **Estrategia Comercial de Temporada**: Diseñado para comercializarse agresivamente en la ventana fiscal de **Octubre - Noviembre**, época de estructuración de presupuestos en la que las juntas directivas autorizan el CAPEX del año fiscal siguiente.

---

## 🧠 2. Fundamentos Filosóficos y Dialécticos

Siguiendo el Mandato Central Geist, el backend de este agente procesa los cálculos a través de un **Bucle Dialéctico Hegeliano**:

```text
  [ TESIS: Propuesta Comercial ] ──> [ ANTÍTESIS: Costos y Riesgos de GPU ] 
                                           │
                                           ▼
                                [ SÍNTESIS: Ajuste de Plan Local ]
```

1. **Tesis (Demanda)**: El cliente solicita una cotización con requerimientos de alta concurrencia.
2. **Antítesis (Restricción)**: El clúster local de GPUs (RTX 4090s) se saturaría bajo esta carga si se excede la cuota de trabajadores.
3. **Síntesis (Optimización)**: El agente ajusta dinámicamente los parámetros de costos internos para sugerir un plan basado en clúster local escalable y un soporte de mantenimiento mensual del 10% para calzar con el margen objetivo deseado.

---

## 📊 3. Modelos Matemáticos y SOTA Implementados

El núcleo analítico de la aplicación utiliza fórmulas matemáticas avanzadas para proyectar el flujo de caja y calcular márgenes óptimos:

### A. Proyección de Ingresos mediante Suavizado Exponencial Simple
Se utiliza para estimar tendencias de costos operativos basándose en periodos anteriores:

$$\hat{Y}_{t+1} = \alpha Y_t + (1 - \alpha) \hat{Y}_t$$

Donde:
* $\hat{Y}_{t+1}$ es la predicción del costo para el próximo mes.
* $Y_t$ es el costo real observado en el mes actual.
* $\alpha$ es el factor de suavizado (configurable entre 0 y 1).

### B. Holt's Linear Exponential Smoothing (Double Smoothing)
Incorporado para modelar tendencias lineales en los costos a lo largo del tiempo:

$$S_t = \alpha Y_t + (1 - \alpha)(S_{t-1} + b_{t-1})$$
$$b_t = \beta (S_t - S_{t-1}) + (1 - \beta)b_{t-1}$$
$$F_{t+m} = S_t + m \times b_t$$

Donde:
* $S_t$ representa el nivel estimado del costo en el periodo $t$.
* $b_t$ representa la tendencia estimada.
* $\beta$ es la constante de suavizado para la tendencia.
* $F_{t+m}$ es el pronóstico a $m$ pasos adelante.

### C. Optimización de Margen de Ganancia Neto
El precio de venta sugerido al cliente final ($P_s$) se calcula deduciendo el ahorro por procesamiento de tokens locales frente a llamadas de API en la nube:

$$P_s = \frac{C_b - S_{local}}{1 - \frac{M_{obj}}{100}}$$

### D. Simulaciones de Riesgo Monte Carlo
El simulador ejecuta $N$ simulaciones aleatorias basadas en una distribución gaussiana del costo base con incertidumbre $\sigma$:

$$Cost_{sim} \sim N(C_b, \sigma^2)$$

Esto provee umbrales estadísticos realistas para la mitigación del riesgo:
* **P10 (Optimista)**: Costo que solo se superará en el 90% de los casos.
* **P50 (Esperado)**: Costo medio del escenario.
* **P90 (Pesimista)**: Límite superior de costo con 90% de confianza.

---

## 🔌 4. Integración de Protocolos de Contexto (MCP)

Este agente implementa el **Model Context Protocol (MCP)** para permitir que los modelos de lenguaje locales lean y escriban contexto de manera estructurada:

1. **SQLite MCP Server (`mcp-servers/sqlite-mcp.json`)**: 
   Permite al LLM local realizar consultas SQL directas e inscribir cotizaciones en la base de datos de auditoría `db/ledger.sqlite` sin intervención manual. Habilitado con límites de seguridad y `SafeMode`.
2. **Filesystem MCP Server (`mcp-servers/filesystem-mcp.json`)**:
   Facilita la escritura y lectura de facturas y reportes comerciales en formato HTML/PDF directamente en el directorio local de reportes.
3. **Brave Search MCP Server (`mcp-servers/brave-search-mcp.json`)**:
   Habilita la búsqueda en internet de tarifas de mercado de competidores de forma local para ajustar dinámicamente el precio del cliente.

---

## 📁 5. Estructura del Repositorio

```text
C:\Users\jegom\BABYLON-FINANCIAL-AGENT\
├── package.json
├── server.js
├── audit.log
├── .env.example
├── db/
│   ├── schema.sql
│   └── init_db.js
├── mcp-servers/
│   ├── sqlite-mcp.json
│   └── filesystem-mcp.json
├── config/
│   └── defaults.js
├── middlewares/
│   └── audit_logger.js
├── skills/
│   ├── financial-analytics/
│   │   ├── forecasting.js
│   │   └── monte_carlo.py
│   └── invoice-parsing/
│       ├── pdf_parser.js
│       └── ocr_helper.py
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── tests/
│   ├── fixtures/
│   │   └── sample_invoice.json
│   └── forecasting.test.js
├── Dockerfile
└── docker-compose.yml
```

---

## 🛠️ 6. Guía de Desarrollo y Pruebas Unitarias

Para asegurar que las adiciones algorítmicas no corrompan las funciones existentes, el repositorio implementa un entorno de desarrollo basado en **Jest** y **ESLint**:

### Ejecución de Pruebas de Software
Para correr las pruebas unitarias locales sobre los pronósticos Holt y el parser de PDF, ejecute:
```bash
npm install
npm test
```

### Reglas de Estilo y Sintaxis
Las contribuciones de código deben seguir la guía de estilo local validada por Prettier y ESLint. Asegúrese de correr el corrector de sintaxis antes de proponer cambios:
```bash
npm run lint
```

---

## 🚀 7. Instalación y Puesta en Marcha en Producción

### Prerrequisitos
* Node.js v20+ instalado.
* SQLite3 en PATH.
* Python 3.10+ (para la simulación de Monte Carlo).

### Despliegue con Docker (Recomendado)
Para desplegar la aplicación financiera de forma local dentro de un contenedor aislado con límites de recursos:
```bash
docker-compose up --build -d
```
El contenedor se iniciará en `http://localhost:4001` con un Healthcheck automatizado de integridad del servicio.
