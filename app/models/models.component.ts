import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  id:number=0;
  name:string = "default";
  price:number = 0;
  datetime="";
  routeSub: Subscription;
  querySub:Subscription;

  constructor(private route:ActivatedRoute
    ) { 
    this.routeSub = route.params.subscribe(params => { this.id=params["id"];})
    this.querySub = route.queryParams.subscribe(qparams => { this.name=qparams["name"];this.price=qparams["price"];this.datetime=qparams["datetime"]})
  
  }
  

  ngOnInit(): void {
  }

}
