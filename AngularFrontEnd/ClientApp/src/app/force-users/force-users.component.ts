import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

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
export class ForceUsersComponent implements OnInit, OnDestroy {

  @ViewChild('forceUserTable') forceUserTable: MatTable<Element>;

  displayedColumns: string[] = ['Name', 'Side', 'Speciality', 'LightSaberColor', 'Icon'];

  forceUsers: ForceUserModel[] = [];

  faJediOrder = faJediOrder;
  faGalacticRepublic = faGalacticRepublic;
  faPlus = faPlus;

  private _unsubscribeAll = new Subject<any>();

  constructor(private readonly forceUsersQueryService_TestServiceProxyService: ForceUsersQueryService_TestServiceProxyService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.forceUsersQueryService_TestServiceProxyService.getForceUsers()
    .subscribe((_forceUsers: ForceUser[]) => {
      this.forceUsers = _forceUsers.map(x => ForceUserModel.createFromDto(x));
      this.forceUserTable.renderRows();
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  openDialog(forceUser: ForceUserModel): void {
    const dialogRef = this.dialog.open(ForceUserDialogComponent, {
      width: '800px',
      data: forceUser
    });

    dialogRef.afterClosed()
    .pipe(filter(result => !!result),
    takeUntil(this._unsubscribeAll))
    .subscribe((result: ForceUserModel) => {
      this.updateForceUserTable(result);
    });
  }

  updateForceUserTable(forceUser: ForceUserModel): void {

    const updatedForceUser = this.forceUsers.find(f => f.id === forceUser.id);

    if(!updatedForceUser) {
      this.forceUsers.unshift(forceUser)
    } else {
      updatedForceUser.name = forceUser.name;
      updatedForceUser.side = forceUser.side;
      updatedForceUser.speciality = forceUser.speciality;
      updatedForceUser.lightSaberColor = forceUser.lightSaberColor;;
    }
;
    this.forceUserTable.renderRows();
  }

}
