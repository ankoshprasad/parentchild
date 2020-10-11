import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataboardService {

  constructor(private http:Http) { }
  getData(name){
	  let url = "http://dummy.restapiexample.com/api/v1/employee/"+name;
	  return this.http.get(url)
	 .map(
	 (res) =>{
	let resData = res.json();
	console.log(resData);
    return 	resData;
	
	 }
	 );
  }
}
