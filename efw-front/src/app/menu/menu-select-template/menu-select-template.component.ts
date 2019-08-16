import { MenuTemplateService } from './../menuTemplate.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { MenuTemplate } from '../../models/menu/menutemplate/menuTemplate.model';
import { User } from '../../models/user/user.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-select-template',
  templateUrl: './menu-select-template.component.html',
  styleUrls: ['./menu-select-template.component.css']
})
export class MenuSelectTemplateComponent implements OnInit {

  templates: MenuTemplate[];
  selectedTemplate: MenuTemplate;
  currentUser: User;

  constructor(private userService: UserService, private menuTemplateService: MenuTemplateService,
    public dialogRef: MatDialogRef<MenuSelectTemplateComponent>) {
      this.currentUser = this.userService.currentUserValue;
    }

  ngOnInit() {
    this.menuTemplateService.getUserTemplates(this.currentUser.id).subscribe(data => {
      this.templates = data;
    });
  }
}
