import {Component, Inject, Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'dialog-elements-example.html',
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogElementsExampleDialog);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
         console.log('call delete here');
      }
    });
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}
  
  closeDialog() {
    this.dialogRef.close(true);
  }
}
