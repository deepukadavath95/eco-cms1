import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproductform',
  templateUrl: './addproductform.component.html',
  styleUrls: ['./addproductform.component.scss']
})
export class AddproductformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addproduct()
  {
    console.log("addproduct");
  }
}
