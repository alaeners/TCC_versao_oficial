import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
//ja estavam
import { ComponentsComponent } from './components/components.component';

// minha criação
import { AboutComponent } from './shared/about/about.component';
import { EvaluateLocalComponent } from './shared/evaluate-local/evaluate-local.component';
import { ListLocalComponent } from './shared/list-local/list-local.component';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './no-shared/dashboard/dashboard.component';
import { RegisterLocalComponent } from './shared/register-local/register-local.component';
import { NgbdModalBasicComponent } from './components/modal/modal.component';
import { UserComponent } from './no-shared/user/user.component';
import { ListCardComponent } from './shared/list-local/list-card/list-card.component';
import { EvaluateScreenComponent } from './shared/evaluate-local/evaluate-screen/evaluate-screen.component';
import { UserActionComponent } from './no-shared/user/user-action/user-action.component';

const routes: Routes = [
    { path: '', redirectTo: 'index',                pathMatch: 'full' },
    { path: 'shared/about',                         component: AboutComponent },
    { path: 'shared/login',                         component: LoginComponent },
    { path: 'shared/register-local',                component: RegisterLocalComponent },
    { path: 'shared/list-local',                    component: ListLocalComponent },
    { path: 'shared/list-local/list-card/:tipo',    component: ListCardComponent },
    { path: 'shared/evaluate-local',                component: EvaluateLocalComponent },
    { path: 'shared/evaluate-screen',               component: EvaluateScreenComponent },
    { path: 'no-shared/dashboard',                  component: DashboardComponent },
    { path: 'no-shared/user',                       component: UserComponent },
    { path: 'no-shared/user-action',                component: UserActionComponent },
    { path: 'modal',                                component: NgbdModalBasicComponent },

    { path: 'index',                                component: ComponentsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
