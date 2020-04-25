import { Component, OnInit } from '@angular/core';

import { faQuestionCircle, faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  faHome = faHome;

  constructor() { }

  ngOnInit() {
    console.log("FA: ", faQuestionCircle);
    console.log("FA: ", faHome);
  }

}
