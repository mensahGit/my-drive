import { Component, OnInit } from '@angular/core';
import {DataService} from './service/data.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <h1>Hello {{last}}</h1>
  <h1>Hello {{final}}</h1>
  <h1>Chao {{author}}</h1>
  `
})
export class AppComponent  { 
  name = 'Angular'; 
  last = 'Mensah';
  final = 'Senor Anguloso';

  title:string;
  author:string= 'Dickweed';
  description:string;


constructor ( private _dataservice:DataService ) {}

  ngOnInit(){

    this._dataservice.fetchBookData();
    this._dataservice.success();
    console.log(this._dataservice);
  }

	

}
