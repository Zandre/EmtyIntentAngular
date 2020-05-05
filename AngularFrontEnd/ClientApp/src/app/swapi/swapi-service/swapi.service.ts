import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import { SwapiPerson } from '../people/models/swapi-person.model';

@Injectable()

export class SwapiService {

  private swapiPeople: SwapiPerson[] = [];

  peopleChanged = new Subject<void>();

  constructor(private readonly http: HttpClient) {  }

  fetchSwapiPeople() {
    this.http
      .get('https://swapi.dev/api/people/')
      .map((response: any) => {
        const data = response.results;
        const people = data.map(person => {
          return SwapiPerson.createSwapiPerson(person);
        });
        return people;
      })
      .subscribe(data => {
        this.swapiPeople = data;
        this.peopleChanged.next();
      });
  }

  getSwapiPeople() {
    return this.swapiPeople;
  }
}
