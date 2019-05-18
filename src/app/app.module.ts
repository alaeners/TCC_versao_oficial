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
import { EvaluateLocalComponent } from './shared/evaluate-local/evaluate-local.component';
import { DeleteLocalComponent } from './no-shared/delete-local/delete-local.component';
import { DeleteUserComponent } from './no-shared/delete-user/delete-user.component';
import { ListUserComponent } from './no-shared/list-user/list-user.component';
import { MergeLocalComponent } from './no-shared/merge-local/merge-local.component';
import { NotifyLocalComponent } from './no-shared/notify-local/notify-local.component';
import { RegisterUserComponent } from './no-shared/register-user/register-user.component';
import { UpdateLocalComponent } from './no-shared/update-local/update-local.component';
import { UpdateUserComponent } from './no-shared/update-user/update-user.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        AboutComponent,
        DashboardComponent,
        RegisterLocalComponent,
        ListLocalComponent,
        EvaluateLocalComponent,
        DeleteLocalComponent,
        DeleteUserComponent,
        ListUserComponent,
        MergeLocalComponent,
        NotifyLocalComponent,
        RegisterUserComponent,
        UpdateLocalComponent,
        UpdateUserComponent

    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        NgxMaskModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
