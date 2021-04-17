import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[{ path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
 { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) }];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
