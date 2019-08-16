import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-save-template',
  templateUrl: './menu-save-template.component.html',
  styleUrls: ['./menu-save-template.component.css']
})
export class MenuSaveTemplateComponent implements OnInit {

  templateName: string;

  constructor(public dialogRef: MatDialogRef<MenuSaveTemplateComponent>) {}

  ngOnInit() {

  }

}
