import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';
import * as moment from 'moment';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  constructor(public dateService: DateService) {}
  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
