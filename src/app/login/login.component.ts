import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() buttonClicked = new EventEmitter();
  constructor(private router: Router) { }
 // @Input() item: string;
  ngOnInit() {
  }
onOptionsSelected(value:string){
	 this.buttonClicked.emit(value);
	 this.router.navigateByUrl('/home');
}
}
