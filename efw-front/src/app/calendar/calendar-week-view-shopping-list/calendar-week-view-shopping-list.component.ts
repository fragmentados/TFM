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

  onOkClick(): void {
    this.dialogRef.close();
  }
}
