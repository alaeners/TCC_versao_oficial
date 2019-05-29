import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluate-screen',
  templateUrl: './evaluate-screen.component.html',
  styleUrls: ['./evaluate-screen.component.scss']
})
export class EvaluateScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('evaluate-screen-page');
  }

  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('evaluate-screen-page');
  }

}
