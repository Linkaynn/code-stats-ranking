import {Injectable} from '@angular/core';
import {BaseService} from './base-service/base-service';
import {ServicesCore} from './base-service/service-core-provider';
import {CodeStater} from '../model/CodeStater';

@Injectable()
export class CodeStatersService extends BaseService {

  constructor(protected core: ServicesCore) {
    super(core);
  }

  getCodeStater(codeStater) {
    return this.get(codeStater.username, null, (res) => {
      return CodeStater.fromJSON(res, codeStater);
    });
  }

}
