import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.scss']
})
export class ListLocalComponent implements OnInit, OnDestroy {

  data: Date = new Date();
  focus;
  focus1;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;

  constructor(private db: AngularFireDatabase) {
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.pipe(
      switchMap(size =>
        db.list('/items', ref =>
          size ? ref.orderByChild('size').equalTo(size) : ref
        ).snapshotChanges()
      )
    );
  }
  filterBy(size: string|null) {
    this.size$.next(size);
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
