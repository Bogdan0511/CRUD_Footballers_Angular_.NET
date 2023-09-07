import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Footballer } from 'src/app/models/footballers';
import { FootballersService } from 'src/app/services/footballers.service';

@Component({
  selector: 'app-edit-footballer',
  templateUrl: './edit-footballer.component.html',
  styleUrls: ['./edit-footballer.component.css']
})

export class EditFootballerComponent implements OnInit{

  @Input() footballer?: Footballer;
  @Output() footballersUpdated = new EventEmitter<Footballer[]>();

  constructor(private footballersService: FootballersService) { }

  ngOnInit() : void {

  }

  updateFootballer(footballer: Footballer) {
      this.footballersService
        .updateFootballer(footballer)
          .subscribe((footballers: Footballer[]) => this.footballersUpdated.emit(footballers));
  }

  deleteFootballer(footballer: Footballer) {
    this.footballersService
        .deleteFootballer(footballer)
          .subscribe((footballers: Footballer[]) => this.footballersUpdated.emit(footballers));
  }

  createFootballer(footballer: Footballer) {
    this.footballersService
    .createFootballer(footballer)
      .subscribe((footballers: Footballer[]) => this.footballersUpdated.emit(footballers));
  }
}
