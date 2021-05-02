import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddproductformComponent } from './addproductform/addproductform.component';
import { EditproductformComponent } from './editproductform/editproductform.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddproductformComponent,
    EditproductformComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
