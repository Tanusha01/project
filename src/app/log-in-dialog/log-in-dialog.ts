import {Component, Inject, Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'log-in-dialog',
  templateUrl: 'log-in-dialog.html',
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


@Component({
  selector: 'log-in-dialog-examle',
  templateUrl: 'log-in-dialog-examle.html',
  styleUrls: ['log-in-dialog-examle.scss'],
})
export class LogInDialogExample {
  constructor(public dialogRef: MatDialogRef<LogInDialogExample>) {}
  
  closeDialog() {
    this.dialogRef.close(true);
  }
}
