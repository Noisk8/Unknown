import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

  // Start of Selection
  // Esta función inicializa la aplicación Angular con el componente principal y la configuración especificada.
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
