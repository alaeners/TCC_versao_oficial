import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss']
})
export class ListLocalComponent implements OnInit, OnDestroy {

  data: Date = new Date();
  focus;
  focus1;

  constructor(db: AngularFireDatabase) {

  }




  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('list-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('list-local-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
