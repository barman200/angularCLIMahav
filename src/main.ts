import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// window['CESIUM_BASE_URL'] = '/node_modules/cesium/build/Cesium';
window['CESIUM_BASE_URL'] = '/assets/cesium';
platformBrowserDynamic().bootstrapModule(AppModule);
