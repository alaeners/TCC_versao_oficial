import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('user-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('user-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    admin.auth().listUsers(1000, nextPageToken)
      .then(function (listUsersResult) {
        listUsersResult.users.forEach(function (userRecord) {
          console.log('user', userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch(function (error) {
        console.log('Error listing users:', error);
      });
  }

  updateUser() {
    admin.auth().updateUser(uid, {
      email: 'modifiedUser@example.com',
      password: 'newPassword'
    })
      .then(function (userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully updated user', userRecord.toJSON());
      })
      .catch(function (error) {
        console.log('Error updating user:', error);
      });
  }

  deleteUser() {
    admin.auth().deleteUser(uid)
      .then(function () {
        console.log('Successfully deleted user');
      })
      .catch(function (error) {
        console.log('Error deleting user:', error);
      });
  }



}
