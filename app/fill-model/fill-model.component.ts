import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-model',
  templateUrl: './fill-model.component.html',
  styleUrls: ['./fill-model.component.css']
})
export class FillModelComponent implements OnInit {
  model = {
    id: 0,
    name: "",
    datetime: "",
    price:""
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  saveAndShow( mode: any ){
    var i:number;
   
    if (mode.name){    
      localStorage.setItem (mode.id, JSON.stringify(mode));
    location.reload()

  }
  }
}
