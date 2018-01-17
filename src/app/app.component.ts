import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.fetchCharacter();
  }

  // rootName= 'MyPussy';

  // rootItems = ['Apple', 'Banana', 'Orange'];

  // onNameChanged(newName) {
  //   this.rootName = newName;
  // }

  // onItemWasAdded(newItem) {
  //   this.rootItems.push(newItem);
  //   console.log(this.rootItems);
  // }
}
