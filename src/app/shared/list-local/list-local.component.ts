import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss']
})
export class ListLocalComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('list-local-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('list-local-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

}
