import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[{ path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
 { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
 { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
 { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
 { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
