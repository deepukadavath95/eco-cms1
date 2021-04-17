  import { Component, OnInit } from '@angular/core';
  import { HttpClient} from '@angular/common/http'
  import { environment } from 'src/environments/environment';

  @Component({
    selector: 'testimonial-card',
    templateUrl: './testionial-card.component.html',
    styleUrls: ['./testionial-card.component.scss']
  })
  export class TestimonialCardComponent implements OnInit {
      testimonial:any;
    baseurl:string=environment.baseurl;
    sliderOptions: any = {
      loop:true,
      responsiveClass:true,
      autoplay:true,
      autoplayTimeout:1000,
      margin:10,
      rewind:false,
      // lazyLoadEager:4,
      dots:false,
      
      // autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              
          }
      }
      
    }
    
    constructor(private http: HttpClient) { }

    ngOnInit(): void {

      this.http.get(this.baseurl+'testimonials').subscribe((data)=>{
        this.testimonial= data;
      })

    }

  }
