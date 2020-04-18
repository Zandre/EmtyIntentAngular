import { Component, OnInit } from '@angular/core';

import { faCoffee, faAnchor, faAngry, faBroom } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Font Awesome icons
  faCoffee = faCoffee;
  faAnchor = faAnchor;
  faAngry = faAngry;
  faBroom = faBroom;

  constructor() { }

  ngOnInit() {

  }
}
