import { Component, OnInit} from '@angular/core';
import { CommonserviceService } from './../utilities/services/commonservice.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getListData: any;
  constructor(private commonserviceService: CommonserviceService) { }
  name:string
  ngOnInit() {
	 
  }

showNextComponent(value:string) {
    this.name = value;
	console.log(this.name);
  }
}
