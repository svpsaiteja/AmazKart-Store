import { InjectionToken } from '@angular/core';

export interface AppConfig {
  name: string;
  url: string;
}

const APP_CONFIG = new InjectionToken<AppConfig[]>('APP_CONFIG');

export default APP_CONFIG;
