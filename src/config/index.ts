const env = process.env.NODE_ENV;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface AppConfig {
  BASE_URL: string;
}

const config = {
  common: { BASE_URL },
  development: {},
  production: {},
  test: {},
};

const CONFIG = Object.assign(config.common, config[env]) as AppConfig;

export default CONFIG;
