import { Component, OnInit, Input} from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  swService: StarWarsService;
  @Input() characters;
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onAssign(side) {
    this.swService.onSideChosen({name: this.characters.name, side: side});
    // console.log('Change side of ' + this.characters.name + ' to side: ' + side);
  }

  ngOnInit() {
  }

}
