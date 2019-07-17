import { ShoppingList } from './../../models/menu/shoppingList/shoppingList.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-week-view-shopping-list',
  templateUrl: './calendar-week-view-shopping-list.component.html',
  styleUrls: ['./calendar-week-view-shopping-list.component.css']
})
export class CalendarWeekViewShoppingListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CalendarWeekViewShoppingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingList) {}

  ngOnInit() {
  }

  printDialog() {
      const mywindow = window.open('', 'PRINT', 'height=400,width=600');

      mywindow.document.write('<html><head><title>Shopping List</title>');
      mywindow.document.write('</head><body >');
      mywindow.document.write('<h1>Shopping List</h1>');
      mywindow.document.write(document.getElementById('shopping-list dialog').innerHTML);
      mywindow.document.write('</body></html>');

      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      mywindow.close();

      return true;
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
