import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module'; // Import AppServerModule
import { environment } from'./app/environments/environment'; // Import environment module

if (environment.production) {
    enableProdMode();
}

export default AppServerModule; // Export AppServerModule as default
