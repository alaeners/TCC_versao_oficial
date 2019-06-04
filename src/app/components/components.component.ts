import { Component, OnInit, Renderer, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;
    deferredPrompt: any;
    showButton = false;

    //date: {year: number, month: number};
    // model: NgbDateStruct;

    // public isCollapsed = true;
    //  public isCollapsed1 = true;
    // public isCollapsed2 = true;

    state_icon_primary = true;
    constructor() { 

        
    }

    @HostListener('window:beforeinstallprompt', ['$event'])
    onbeforeinstallprompt(e) {
        console.log(e);
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        this.showButton = true;
    }
    addToHomeScreen() {
        // hide our user interface that shows our A2HS button
        this.showButton = false;
        // Show the prompt
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                this.deferredPrompt = null;
            });
    }

    //constructor( private renderer : Renderer, config: NgbAccordionConfig) {
    //config.closeOthers = true;
    //config.type = 'info';
    //}
    //    isWeekend(date: NgbDateStruct) {
    //       const d = new Date(date.year, date.month - 1, date.day);
    //       return d.getDay() === 0 || d.getDay() === 6;
    // }

    //  isDisabled(date: NgbDateStruct, current: {month: number}) {
    //    return date.month !== current.month;
    //  }

    ngOnInit() {
        //  var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('component-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('component-page');
    }
}
