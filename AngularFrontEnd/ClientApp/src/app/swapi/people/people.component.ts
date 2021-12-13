import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { SwapiService } from '../swapi-service/swapi.service';
import { SwapiPerson } from './models/swapi-person.model';




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'swapi-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  options: DataTables.Settings = {};

  columns: Array<any> = [
    {
      title: 'Name',
      name: 'name'
    },
    {
      title: 'Birth year',
      name: 'birthYear'
    },
    {
      title: 'Gender',
      name: 'gender'
    },
    {
      title: 'Hair color',
      name: 'hairColor'
    },
    {
      title: 'Height',
      name: 'height'
    },
    {
      title: 'Skin color',
      name: 'skinColor'
    },
    {
      title: 'Eye color',
      name: 'eye_color'
    },
    {
      title: 'Mass',
      name: 'mass'
    }
  ];

  swapiPeople: SwapiPerson[] = [];
  subscription: Subscription;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {

    this.options = {
      autoWidth: false,
      responsive: true,
      language: {
        searchPlaceholder: 'Search for records...'
      },
      lengthMenu: [[15, 30, 45, -1], ['15 Rows', '30 Rows', '45 Rows', 'Everything']],
      "dom": '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
    };

    this.subscription = this.swapiService.peopleChanged.subscribe(() => {
      this.swapiPeople = this.swapiService.getSwapiPeople();
    });

    this.swapiService.fetchSwapiPeople();
  }

}
