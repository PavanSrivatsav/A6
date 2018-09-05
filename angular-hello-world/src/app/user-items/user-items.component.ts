import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent implements OnInit {
    names:Array<string>; // names:string[];
  constructor() { this.names=["Vighnesh","Ragavan","Sridhar"]}

  ngOnInit() {
  }

}
