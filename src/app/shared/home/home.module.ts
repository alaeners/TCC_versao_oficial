import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

/*import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';*/

import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { EvaluateLocalComponent } from '../evaluate-local/evaluate-local.component';
import { ListLocalComponent } from '../list-local/list-local.component';
import { RegisterLocalComponent } from '../register-local/register-local.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
      ],
    declarations: [
      HomeComponent,
      AboutComponent,
      EvaluateLocalComponent,
      ListLocalComponent,
      RegisterLocalComponent
    ],
    exports: [ HomeComponent ]
})
export class HomeModule { }
