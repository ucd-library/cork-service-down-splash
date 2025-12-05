import fs from 'fs';
import { pathToFileURL } from 'url';

const config = {
  containerPort: process?.env?.APP_CONTAINER_PORT || 3000,
  appConfigPath: process?.env?.APP_CONFIG_PATH || '/cork-service-down-splash/config.js',
  isDevEnv: process?.env?.APP_ENV === 'dev',
  pageTitle: 'Service Unavailable',
  statusCode: 503
};

// Load user config if available
if (config.appConfigPath && fs.existsSync(config.appConfigPath)) {
  try {
    const mod = await import(pathToFileURL(config.appConfigPath).href);
    const userConfig = mod?.default ?? mod;
    if (userConfig && typeof userConfig === 'object') {
      Object.assign(config, userConfig);
    }
  } catch (err) {
    console.error('Failed to load app config:', err);
  }
}

export default config;