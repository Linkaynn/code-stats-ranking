import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesCore} from './helpers/base-service/service-core-provider';
import {BaseService} from './helpers/base-service/base-service';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/dashboard/home/home.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatExpansionModule, MatSliderModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [
    ServicesCore,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
