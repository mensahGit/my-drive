import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {



constructor ( private _http:Http ) { 
  
}

book:Object;



fetchBookData(){
  let url:string = './app/data/book.json';
  this._http.get(url)
  .map((response) => response.json())
  .subscribe((data) => console.log(data)
  )
}


success(){
  console.log('Successful, Menz!')
}

}