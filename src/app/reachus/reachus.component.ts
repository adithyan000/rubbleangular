import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-reachus',
  templateUrl: './reachus.component.html',
  styleUrls: ['./reachus.component.css']
  
})
export class ReachusComponent {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(DialogComponent);

}
}
@Component({
  selector: 'app-reachus',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {}
