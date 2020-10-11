import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms"
import { RxFormBuilder, FormBuilderConfiguration } from '@rxweb/reactive-form-validators';
import { CommonserviceService } from './../utilities/services/commonservice.service';
@Component({
  selector: 'app-dynamic-form2',
  templateUrl: './dynamic-form2.component.html',
  styleUrls: ['./dynamic-form2.component.css']
})
export class DynamicForm2Component implements OnInit {
  userInfoFormGroup: FormGroup
  
  constructor(private formBuilder: RxFormBuilder,private commonserviceService: CommonserviceService) { }
  ngOnInit() {
	  this.userInfoFormGroup = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
        });
	  this.commonserviceService.getData().subscribe((dynamicValidationConfiguration:any)=> { 
        this.userInfoFormGroup = this.formBuilder.group({
          firstName:[''],
		  lastName:['']
        },
        new FormBuilderConfiguration( {dynamicValidation: dynamicValidationConfiguration}
                ));
},
	  (error) => {
	  alert('No data');
	  }
  );
    }
  }


