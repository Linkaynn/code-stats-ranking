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
import {
  MatButtonModule,
  MatExpansionModule,
  MatHeaderCell,
  MatHeaderRowDef,
  MatSliderModule,
  MatSlideToggleModule,
  MatTableModule
} from '@angular/material';
import {TopNavComponent} from './components/shared/top-nav/top-nav.component';
import {CodeStatersService} from './helpers/code-staters.service';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    TopNavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    ServicesCore,
    BaseService,
    CodeStatersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
