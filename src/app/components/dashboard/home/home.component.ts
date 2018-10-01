import {Component, ViewEncapsulation} from '@angular/core';
import {CodeStatersService} from '../../../helpers/code-staters.service';
import {CodeStater} from '../../../model/CodeStater';
import codeStatersJSON from '../../../../assets/code-staters-data';
import {environment} from '../../../../environments/environment';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class HomeComponent {

  displayedColumns: string[] = ['user', 'totalXP', 'average'];
  codeStaters: CodeStater[] = [];

  expandedCodeStaters: CodeStater[] = [];

  constructor(private codeStatersService: CodeStatersService) {
    for (const username of codeStatersJSON.names) {
      this.codeStatersService.getCodeStater(username).then((codeStater: CodeStater) => {
        this.codeStaters = this.codeStaters.concat(codeStater);
        this.codeStaters.sort((a, b) => a.totalExperience <= b.totalExperience ? 1 : -1);
      });
    }
  }

  inProduction() {
    return environment.production;
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
