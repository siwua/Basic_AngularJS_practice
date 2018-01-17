import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  loadedSide = 'all';
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  subscription;
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  // onSideAssigned(charInfo) {
  //   this.sideAssigned.emit(charInfo);
  // }

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.characters = this.swService.getCharacter(params.side);
          this.loadedSide = params.side;
      },
      (error) => { // Error function
      },
      () => {  // Completion function
      }
    );
    this.subscription = this.swService.characterChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacter(this.loadedSide);
      }
    );
  }
  ngOnDestroy() {  // Remove the memory usage of subscrition whenever it's not needed
    this.subscription.unsubscribe();
  }
}
