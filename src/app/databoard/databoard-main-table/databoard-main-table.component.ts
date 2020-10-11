import { Component, OnInit } from '@angular/core';
import { DataboardService } from './../services/databoard.service';
@Component({
  selector: 'app-databoard-main-table',
  templateUrl: './databoard-main-table.component.html',
  styleUrls: ['./databoard-main-table.component.css']
})
export class DataboardMainTableComponent implements OnInit {
  constructor(private databoardService: DataboardService) { }
 getName : string;
 employeeName:string;
 employeeSalary:number
 employeeAge:number;
  ngOnInit() {
	  
  }
  
  getHeroes(name){
   this.databoardService.getData(name).subscribe(getListData =>{
		  const getData = getListData;
		  const employees = getData.data;
		  this.employeeName = employees.employee_name;
		  this.employeeSalary = employees.employee_salary;
		  this.employeeAge = employees.employee_age;
	  },
	  (error) => {
	  alert('No data');
	  }
  );
}

  showNextComponent(name:string) {
    this.getName = name;
	this.getHeroes(name);
  }
}


