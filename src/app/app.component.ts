import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};
const firebaseConfig = {
    apiKey: "AIzaSyDAWWhVn0Nn9ITCrcsLg7UmWt54QHReN0M",
    authDomain: "see-me-3c92b.firebaseapp.com",
    databaseURL: "https://see-me-3c92b.firebaseio.com",
    projectId: "see-me-3c92b",
    storageBucket: "see-me-3c92b.appspot.com",
    messagingSenderId: "872762388838",
    appId: "1:872762388838:web:b7c553f5428c1b71"
  };

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

// tslint:disable-next-line: max-line-length
    constructor( private renderer: Renderer,
                 private router: Router,
                 @Inject(DOCUMENT, )
                 private document: any,
                 private element: ElementRef,
                 public location: Location) {}
    ngOnInit() {
        // Controle de banco com firebase 
        firebase.initializeApp(firebaseConfig);
        firebase.firestore().settings(settings);

        // Controle da navbar
        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listenGlobal('window', 'scroll', (event) => {
                const number = window.scrollY;
                let _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
}
