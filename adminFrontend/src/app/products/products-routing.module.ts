import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductformComponent } from './addproductform/addproductform.component';
import { EditproductformComponent } from './editproductform/editproductform.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [{ path: '', component: ProductsComponent},
                        {path:'addproduct',component:AddproductformComponent},
                        {path:'editproduct',component:EditproductformComponent},
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
