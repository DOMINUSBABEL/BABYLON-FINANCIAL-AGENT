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

### A. Proyección de Ingresos mediante Suavizado Exponencial (SOTA)
Se utiliza para estimar tendencias de costos operativos basándose en periodos anteriores, mitigando picos de estacionalidad:

$$\hat{Y}_{t+1} = \alpha Y_t + (1 - \alpha) \hat{Y}_t$$

Donde:
* $\hat{Y}_{t+1}$ es la predicción del costo para el próximo mes.
* $Y_t$ es el costo real observado en el mes actual.
* $\alpha$ es el factor de suavizado (configurable entre 0 y 1).

### B. Optimización de Margen de Ganancia Neto
El precio de venta sugerido al cliente final ($P_s$) se calcula deduciendo el ahorro por procesamiento de tokens locales frente a llamadas de API en la nube:

$$P_s = \frac{C_b - S_{local}}{1 - \frac{M_{obj}}{100}}$$

Donde:
* $C_b$ es el costo base de desarrollo.
* $S_{local}$ es el ahorro acumulado por procesar modelos open-source de forma local.
* $M_{obj}$ es el margen de ganancia objetivo (porcentaje).

### C. Estructura de Impuestos Localizados (Colombia)
Implementa cálculos automáticos del IVA (19% estándar) y de Retención en la Fuente:

$$IVA = Net \times 0.19$$
$$ReteFuente = Net \times Rate$$

---

## 🔌 4. Integración de Protocolos de Contexto (MCP)

Este agente implementa el **Model Context Protocol (MCP)** para permitir que los modelos de lenguaje locales lean y escriban contexto de manera estructurada:

1. **SQLite MCP Server (`mcp-servers/sqlite-mcp.json`)**: 
   Permite al LLM local realizar consultas SQL directas e inscribir cotizaciones en la base de datos de auditoría `db/ledger.sqlite` sin intervención manual.
2. **Filesystem MCP Server (`mcp-servers/filesystem-mcp.json`)**:
   Facilita la escritura y lectura de facturas y reportes comerciales en formato HTML/PDF directamente en el directorio local de reportes.
3. **Brave Search MCP Server (`mcp-servers/brave-search-mcp.json`)**:
   Habilita la búsqueda en internet de tarifas de mercado de competidores de forma local para ajustar dinámicamente el precio del cliente.

---

## 📁 5. Estructura del Repositorio

* `server.js`: Punto de entrada del servidor Express.
* `db/schema.sql`: Estructura de tablas SQLite para cotizaciones y transacciones.
* `db/init_db.js`: Script de inicialización de la base de datos.
* `src/currency.js`: Módulo de conversión de divisas (COP, USD, EUR).
* `skills/financial-analytics/`: Scripts de suavizado exponencial y algoritmos matemáticos.
* `skills/invoice-parsing/`: Extracción de textos de facturas locales.
* `skills/margin-optimization/`: Algoritmo para balancear precio vs empleados de la pyme.
* `public/`: Interfaz de usuario (HTML5, CSS3, JS).
* `tests/`: Batería de pruebas unitarias en Jest.

---

## 🚀 6. Instalación y Puesta en Marcha

### Prerrequisitos
* Node.js v18+ instalado.
* SQLite3 en PATH (opcional, el instalador lo compila).

### Pasos
1. Clonar el repositorio.
2. Instalar dependencias locales:
   ```bash
   npm install
   ```
3. Ejecutar la inicialización de la base de datos:
   ```bash
   node db/init_db.js
   ```
4. Levantar el aplicativo:
   ```bash
   npm start
   ```
5. Acceder al dashboard financiero a través de la URL: `http://localhost:4001`
