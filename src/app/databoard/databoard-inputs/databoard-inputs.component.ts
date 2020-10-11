import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-databoard-inputs',
  templateUrl: './databoard-inputs.component.html',
  styleUrls: ['./databoard-inputs.component.css']
})
export class DataboardInputsComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter();
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }
  
  showName(){
	this.buttonClicked.emit(this.name);
	console.log(this.name);
  }

}
