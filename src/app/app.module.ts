import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './shared/login/login.component';
import { AboutComponent } from './shared/about/about.component';

import { RegisterLocalComponent } from './shared/register-local/register-local.component';
import { ListLocalComponent } from './shared/list-local/list-local.component';
import { EvaluateLocalComponent } from './shared/evaluate-local/evaluate-local.component';
import { DeleteLocalComponent } from './no-shared/delete-local/delete-local.component';
import { UpdateLocalComponent } from './no-shared/update-local/update-local.component';

import { DashboardComponent } from './no-shared/dashboard/dashboard.component';
import { MergeLocalComponent } from './no-shared/merge-local/merge-local.component';
import { NotifyLocalComponent } from './no-shared/notify-local/notify-local.component';
import { UserComponent } from './no-shared/user/user.component';
import { ListCardComponent } from './shared/list-local/list-card/list-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        AboutComponent,
        RegisterLocalComponent,
        ListLocalComponent,
        ListCardComponent,
        EvaluateLocalComponent,
        DeleteLocalComponent,
        UpdateLocalComponent,
        DashboardComponent,
        MergeLocalComponent,
        NotifyLocalComponent,
        UserComponent
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
        AngularFireAuthModule,
        HttpModule,
        NgxPaginationModule

        //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [AuthService, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule { }
