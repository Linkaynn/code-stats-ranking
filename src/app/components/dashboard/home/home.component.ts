import {Component} from '@angular/core';
import {CodeStatersService} from '../../../helpers/code-staters.service';
import {CodeStater} from '../../../model/CodeStater';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  displayedColumns: string[] = ['user', 'totalXP'];
  codeStaters : CodeStater[] = [];

  constructor(private codeStatersService: CodeStatersService) {
    codeStatersService.getData().then((codeStaters : any) => {
      for (const username of codeStaters.names) {
        this.codeStatersService.getCodeStater(username).then((codeStater : CodeStater) => {
          this.codeStaters = this.codeStaters.concat(codeStater);
          this.codeStaters.sort((a, b) => a.totalXP <= b.totalXP ? 1 : -1)
        })
      }
    })
  }

}
