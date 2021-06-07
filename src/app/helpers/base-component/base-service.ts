import { ComponentsCore } from './service-core-provider';
import { environment } from '../../../environments/environment';

export class BaseComponent {
  constructor(protected core: ComponentsCore) {}

  toast(message: string) {
    this.core.snackBar.open(message);
  }

  inProduction() {
    return environment.production;
  }
}
