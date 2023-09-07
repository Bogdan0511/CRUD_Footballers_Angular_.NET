import { Component } from '@angular/core';
import { Footballer } from './models/footballers';
import { FootballersService } from './services/footballers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Footballers.UI';

  footballers: Footballer[] = [];
  footballerToEdit?: Footballer;

  constructor(private footballersService: FootballersService) {}

  ngOnInit(): void {
    this.footballersService
      .getFootballers()
        .subscribe((result: Footballer[]) => (this.footballers = result));
  }

  initNewFootballer() {
    this.footballerToEdit = new Footballer();
  }

  editFootballer(footballer: Footballer) {
    this.footballerToEdit = footballer;
  }

  updateFootballerList(footballers: Footballer[]){
    this.footballers = footballers;
  }
}
