import {Component, Inject, Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'log-in-dialog',
  templateUrl: 'log-in-dialog.html',
  styleUrls: ['log-in-dialog-examle.scss'],
})
export class LogInDialog {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(LogInDialogExample);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
         console.log('call delete here');
      }
    });
  }
}




import {FormControl, Validators} from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'log-in-dialog-examle',
  templateUrl: 'log-in-dialog-examle.html',
  styleUrls: ['log-in-dialog-examle.scss'],
})
export class LogInDialogExample {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
