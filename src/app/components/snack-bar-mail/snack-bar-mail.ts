import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'snack-bar-mail',
  templateUrl: 'snack-bar-mail.html',
  styleUrls: ['snack-bar-mail.scss'],
})
export class SnackBarComponentExample {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Get all the new information first! ', '', {
      duration: 3000,
    });
  }
}
