import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  baseUrl: string = environment.baseurl;
  productModel : any;

  productName:any;
  price:any;
  rating:any;
  description:any;
  category_id:any;
  meta_tags:any;
  meta_description:any;
  meta_title:any;
  extra_meta:any;
  selectedFile:any;
  
  onFileSelect(event:any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    console.log(this.selectedFile);
}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.baseUrl+'products').subscribe((data)=>{
      this.productModel= data
    })
  }

   addproduct()
   {
  //     var url=this.baseUrl+'products';
  //     const fd = new FormData();
  //     fd.append('image', this.selectedFile, this.selectedFile.name);
  //     fd.append('product_name', this.productName);
  //     fd.append("price",this.price);
  //     fd.append('rating',this.rating);
  //     fd.append('description',this.description);
  //     fd.append('meta_tags',this.meta_tags);
  //     fd.append('meta_description',this.meta_description);
  //     fd.append('extra_meta',this.extra_meta);
  //     fd.append('meta_title',this.meta_title);

  //     this.http.post(url,fd).subscribe(data=>{
  //       console.log(data);
      
  //     })
    }
  
}