import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ComponentsCore} from './service-core-provider';
import {environment} from '../../../environments/environment';

export class BaseComponent {
  constructor(protected core: ComponentsCore) {
  }

  toast(message: string) {
    this.core.snackBar.open(message)
  }

  inProduction() {
    return environment.production;
  }
}
