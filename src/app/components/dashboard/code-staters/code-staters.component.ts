import {Component} from '@angular/core';
import {CodeStatersService} from '../../../helpers/code-staters.service';
import {CodeStater} from '../../../model/CodeStater';
import codeStatersJSON from '../../../../assets/code-staters-data';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BaseComponent} from '../../../helpers/base-component/base-service';
import {ComponentsCore} from '../../../helpers/base-component/service-core-provider';

@Component({
  selector: 'app-home',
  templateUrl: './code-staters.component.html',
  styleUrls: ['./code-staters.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class CodeStatersComponent extends BaseComponent{

  displayedColumns: string[] = ['user', 'totalXP', 'average'];
  codeStaters: CodeStater[] = [];

  expandedCodeStaters: CodeStater[] = [];

  constructor(protected core : ComponentsCore, private codeStatersService: CodeStatersService) {
    super(core);

    for (const codeStater of codeStatersJSON.data) {
      this.codeStatersService.getCodeStater(codeStater).then((codeStater: CodeStater) => {
        this.codeStaters = this.codeStaters.concat(codeStater);
        this.codeStaters.sort((a, b) => a.totalExperience <= b.totalExperience ? 1 : -1);
      });
    }
  }

  rowClick(codeStater: CodeStater) {
    let indexOf = this.expandedCodeStaters.indexOf(codeStater);
    if (indexOf != -1) {
      this.expandedCodeStaters.splice(indexOf, 1);
    } else {
      this.expandedCodeStaters.push(codeStater);
    }
  }
}
