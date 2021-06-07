import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesCore } from './helpers/base-service/service-core-provider';
import { BaseService } from './helpers/base-service/base-service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CodeStatersComponent } from './components/dashboard/code-staters/code-staters.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatExpansionModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { CodeStatersService } from './helpers/code-staters.service';
import { ComponentsCore } from './helpers/base-component/service-core-provider';

@NgModule({
  declarations: [AppComponent, DashboardComponent, CodeStatersComponent, TopNavComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    ServicesCore,
    BaseService,
    ComponentsCore,
    CodeStatersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
