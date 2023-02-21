import {Component, Inject, Optional} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
})
export class Dialog {
  constructor(public dialog: MatDialog) {}

  openedDialog(): void {
    let dialogRef = this.dialog.open(DialogElement);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
         console.log('call delete here');
      }
    });
  }
}


@Component({
  selector: 'dialog-element',
  templateUrl: 'dialog-element.html',
  styleUrls: ['dialog-element.scss'],
})
export class DialogElement {
  constructor(public dialogRef: MatDialogRef<DialogElement>) {}
  
  closeDialog() {
    this.dialogRef.close(true);
  }
}