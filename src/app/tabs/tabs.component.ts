import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  swService: StarWarsService;
  characters = [];
  chosenSide = 'all';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenSide = side;
  }

  getCharacter(char) {
    this.characters = this.swService.getCharacter(this.chosenSide);
    return this.characters;
  }
}
