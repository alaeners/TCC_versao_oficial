import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { LoginComponent } from './shared/login/login.component';
import { AboutComponent } from './shared/about/about.component';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterLocalComponent } from './shared/register-local/register-local.component';

import { DashboardComponent } from './no-shared/dashboard/dashboard.component';
import { ListLocalComponent } from './shared/list-local/list-local.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        AboutComponent,
        DashboardComponent,
        RegisterLocalComponent,
        ListLocalComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        NgxMaskModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
