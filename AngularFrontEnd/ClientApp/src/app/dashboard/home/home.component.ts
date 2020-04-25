import { Component, OnInit } from '@angular/core';

import { faCoffee, faAnchor, faAngry, faBroom, faThumbsUp, faInfo, faTimes, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ForceUsersQueryService_TestServiceProxyService } from 'src/@generated/service-proxies/force-users-query-service_-test-service-proxy.service';

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
  faThumbsUp = faThumbsUp;
  faTimes = faTimes;
  faInfo = faInfo;
  faExclamationTriangle = faExclamationTriangle;

  constructor(private toastr: ToastrService,
    private readonly forceUsersQueryService_TestServiceProxyService: ForceUsersQueryService_TestServiceProxyService)
    {

     }

  ngOnInit() {

  }

  showSuccessToast(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showInfoToast(): void {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  showWarnToast(): void {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

  showErrorToast(): void {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

  typeScriptError(): void {
    throw new Error('TypeScipt error works');
  }

  cSharpError(): void {
    this.forceUsersQueryService_TestServiceProxyService.causeCSharpError().subscribe();
  }
}
