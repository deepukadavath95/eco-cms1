import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from '../blogs/blogs.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [{ path: '', component: HomepageComponent },
                        {path:'blogs',component:BlogsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
