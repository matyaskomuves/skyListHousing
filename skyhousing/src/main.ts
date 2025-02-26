import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(), provideFirebaseApp(() => initializeApp({ projectId: "projectskyhousing", appId: "1:607036298333:web:edd72454a0ca59388869b4", storageBucket: "projectskyhousing.firebasestorage.app", apiKey: "AIzaSyCSeIw04-rCs4gPoL0Xl-lFeGhxpRC0-7A", authDomain: "projectskyhousing.firebaseapp.com", messagingSenderId: "607036298333" })), provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider("6Lc0tOIqAAAAAGk5wWw38nobfhGwRV_ci4ZHeLZp");
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    })
  ]
})
  .catch(err => console.error(err));
