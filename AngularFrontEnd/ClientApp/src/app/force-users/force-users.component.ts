import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { ForceUsersQueryService_TestServiceProxyService } from 'src/@generated/service-proxies/force-users-query-service_-test-service-proxy.service';
import { ForceUser } from 'src/@generated/dtos/force-user';
import { ForceUserModel } from './models/force-user.model';

import { faJediOrder, faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-force-users',
  templateUrl: './force-users.component.html',
  styleUrls: ['./force-users.component.scss']
})
export class ForceUsersComponent implements OnInit {

  @ViewChild('forceUserTable') forceUserTable: MatTable<Element>;

  displayedColumns: string[] = ['Name', 'Side', 'Speciality', 'LightSaberColor', 'Icon'];

  forceUsers: ForceUserModel[] = [];
  faJediOrder = faJediOrder;
  faGalacticRepublic = faGalacticRepublic;

  constructor(private readonly forceUsersQueryService_TestServiceProxyService: ForceUsersQueryService_TestServiceProxyService) { }

  ngOnInit() {
    this.forceUsersQueryService_TestServiceProxyService.getForceUsers()
    .subscribe((_forceUsers: ForceUser[]) => {
      this.forceUsers = _forceUsers.map(x => ForceUserModel.createFromDto(x));
      this.forceUserTable.renderRows();
    });
  }

}
