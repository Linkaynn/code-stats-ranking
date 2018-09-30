import {Injectable} from '@angular/core';
import {BaseService} from './base-service/base-service';
import {ServicesCore} from './base-service/service-core-provider';
import {CodeStater} from '../model/CodeStater';

@Injectable()
export class CodeStatersService extends BaseService {

  constructor(protected core: ServicesCore) {
    super(core);
  }

  getData() {
    return this.http.get("../../assets/codestaters.json").toPromise();
  }

  getCodeStater(username: string) {
    return this.get(username, null, CodeStater.fromJSON)
  }

}
