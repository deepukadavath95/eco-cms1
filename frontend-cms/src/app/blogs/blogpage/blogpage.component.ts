import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {
  baseurl=environment.baseurl;
  blogbyid:any;
  values:any;
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      let id=data.get('id');
      
      this.getDetails(id);
    })
    this.http.get(this.baseurl+'blogs').subscribe((data)=>{
      this.values= data;
      
      console.log(this.values);
    });
  }

  getDetails(id:any){
    this.http.get(this.baseurl+'blogs/'+id).subscribe((data)=>{
      this.blogbyid = data;
      console.log(this.blogbyid);
    })
  }
  

}
