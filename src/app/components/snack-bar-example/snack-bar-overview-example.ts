import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.scss'],
})
export class SnackBarOverviewExample {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, message2: string, message3: string) {
    this._snackBar.open(
      'You have reserved a table for: ' +
        message2 +
        ', ' +
        message3 +
        ', ' +
        message,
      '',
      {
        duration: 3000,
      },
    );
  }
}
