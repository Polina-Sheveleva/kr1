import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kr1';
  models:any[]=[]
  
  constructor (private router: Router){
    this.models = [];
    var i:number;

    for (i = 0; i < localStorage.length; i++) 
    {
      var key:any;
      key = localStorage.key(i);
      var model = {
        id: 0,
        name: "",
        datetime: "",
        price:""
      },
      m:any;
      m=localStorage.getItem(key);
      
      model = JSON.parse(m)
      this.models.push({
        "id": model.id,
        "name": model.name,
        "datetime":model.datetime,
        "price":model.price
        
      }) 
      }
    }
  }


