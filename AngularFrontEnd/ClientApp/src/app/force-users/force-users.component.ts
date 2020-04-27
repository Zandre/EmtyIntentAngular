import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ForceUsersQueryService_TestServiceProxyService } from 'src/@generated/service-proxies/force-users-query-service_-test-service-proxy.service';
import { ForceUser } from 'src/@generated/dtos/force-user';
import { ForceUserModel } from './models/force-user.model';
import { ForceUserDialogComponent } from './force-user-dialog/force-user-dialog.component';

import { faJediOrder, faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  faPlus = faPlus;

  constructor(private readonly forceUsersQueryService_TestServiceProxyService: ForceUsersQueryService_TestServiceProxyService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.forceUsersQueryService_TestServiceProxyService.getForceUsers()
    .subscribe((_forceUsers: ForceUser[]) => {
      this.forceUsers = _forceUsers.map(x => ForceUserModel.createFromDto(x));
      this.forceUserTable.renderRows();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForceUserDialogComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
