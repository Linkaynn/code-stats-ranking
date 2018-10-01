import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ServicesCore {
  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
}
