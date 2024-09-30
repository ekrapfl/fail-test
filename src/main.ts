import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
// import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideAngularQuery, QueryClient } from "@tanstack/angular-query-experimental";
// import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: "ios" }),
    // importProvidersFrom(IonicModule.forRoot({ mode: "ios" })),
    provideRouter(routes),
    provideAngularQuery(
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, networkMode: "always" },
        },
      })
    ),
  ],
});
