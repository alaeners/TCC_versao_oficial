import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-local',
  templateUrl: './register-local.component.html',
  styleUrls: ['./register-local.component.scss']
})
export class RegisterLocalComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('register-local-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('register-local-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

}
