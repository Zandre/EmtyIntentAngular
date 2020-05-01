import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SignupsComponent} from "./signups.component";
import {BsDropdownModule, } from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";

@NgModule({
    declarations: [SignupsComponent],
    imports: [
        CommonModule,
        RouterModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot()
    ],
    exports: [
        SignupsComponent
    ]
})
export class SignupsModule {
}
