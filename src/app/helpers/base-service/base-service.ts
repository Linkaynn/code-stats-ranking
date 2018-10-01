import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ServicesCore} from './service-core-provider';
import {environment} from '../../../environments/environment';

@Injectable()
export class BaseService {
  private static BASE_URL = environment.base_url;

  http: HttpClient;

  constructor(protected core: ServicesCore) {
    this.http = core.http;
  }

  protected get(endpoint, params?: [any], mapFunction?): Promise<any> | any {
    let queryParams = this.buildQueryParam(params);

    let observableResult = this.http.get(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint + queryParams);

    return (mapFunction ? observableResult.map(mapFunction) : observableResult).toPromise();
  }

  protected delete(endpoint, params?: [any], mapFunction?): Promise<any> | any {
    let queryParams = this.buildQueryParam(params);

    let observableResult = this.http.delete(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint + queryParams);

    return (mapFunction ? observableResult.map(mapFunction) : observableResult).toPromise();
  }

  protected post(endpoint, body, mapFunction?): Promise<any> | any {
    let observableResult = this.http.post(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint, body);

    return (mapFunction ? observableResult.map(mapFunction) : observableResult).toPromise();
  }

  protected patch(endpoint, body, mapFunction?): Promise<any> | any {
    let observableResult = this.http.patch(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint, body);

    return (mapFunction ? observableResult.map(mapFunction) : observableResult).toPromise();
  }

  protected put(endpoint, body, mapFunction?): Promise<any> | any {
    let observableResult = this.http.put(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint, body);

    return (mapFunction ? observableResult.map(mapFunction) : observableResult).toPromise();
  }

  protected getFile(endpoint) {
    return this.http.get(BaseService.BASE_URL + this.insertSlashIfNeeded(endpoint) + endpoint, {responseType: 'blob'}).toPromise();
  }

  private insertSlashIfNeeded(endpoint) {
    return (endpoint.charAt(0) == '/' ? '' : '/');
  }

  private buildQueryParam(params: [any]) {
    let queryParams = '?';

    if (params) {
      for (let i = 0; i < params.length; i++) {
        let param = params[i];

        // If the param is empty we skip it
        if (!param || param == {}) continue;

        // We get the key name to put it as string
        let key = Object.keys(param)[0];

        queryParams += key + '=' + param[key];

        if (i != params.length - 1) {
          queryParams += '&';
        }
      }
    }

    // If all params are empty, we send empty string
    if (queryParams == '?' || !queryParams) queryParams = '';

    return queryParams;
  }

}
