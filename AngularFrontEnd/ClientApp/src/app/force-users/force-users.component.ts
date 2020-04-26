import { Component, OnInit } from '@angular/core';

import { ForceUsersQueryService_TestServiceProxyService } from 'src/@generated/service-proxies/force-users-query-service_-test-service-proxy.service';
import { ForceUser } from 'src/@generated/dtos/force-user';

@Component({
  selector: 'app-force-users',
  templateUrl: './force-users.component.html',
  styleUrls: ['./force-users.component.scss']
})
export class ForceUsersComponent implements OnInit {

forceUsers: ForceUser[] = [];

  constructor(private readonly forceUsersQueryService_TestServiceProxyService: ForceUsersQueryService_TestServiceProxyService) { }

  ngOnInit() {
    this.forceUsersQueryService_TestServiceProxyService.getForceUsers()
    .subscribe((_forceUsers: ForceUser[]) => {
      console.log(_forceUsers)
      this.forceUsers = _forceUsers.map(x => x);
      console.log(this.forceUsers)
    });
  }

}
