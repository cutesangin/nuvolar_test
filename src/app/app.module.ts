import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { WildcardRoutingModule } from './wild-card-routing.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { FirstPageModule } from './first-page/first-page.module';
import { SecondPageModule } from './second-page/second-page.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FirstPageModule,
    SecondPageModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    WildcardRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
