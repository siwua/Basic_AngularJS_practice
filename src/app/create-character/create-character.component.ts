import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [{display: 'None', value: ''},
                    {display: 'Light', value: 'light'},
                    {display: 'Dark', value: 'dark'}
                  ];
  swService: StarWarsService;
  defaultName = 'JJlin';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onSubmit(formSubmitted) {
    if (formSubmitted.invalid) {
      return;
    }
    console.log(formSubmitted.value);
    this.swService.addCharacter(formSubmitted.value.name, formSubmitted.value.side);
  }

  ngOnInit() {
  }

}
