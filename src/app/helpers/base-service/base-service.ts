import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicesCore } from './service-core-provider';
import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService<T> {
  private static BASE_URL = environment.base_url;

  http: HttpClient;

  constructor(protected core: ServicesCore) {
    this.http = core.http;
  }

  protected get(endpoint): Promise<T> {
    return this.http
      .get<T>(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint)
      .toPromise();
  }

  private insertSlashIfNeeded(endpoint) {
    return endpoint.charAt(0) === '/' ? '' : '/';
  }
}
