import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms"
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import { DataboardComponent } from './databoard/databoard.component';
import { DataboardMainTableComponent } from './databoard/databoard-main-table/databoard-main-table.component';
import { DataboardInputsComponent } from './databoard/databoard-inputs/databoard-inputs.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { DynamicForm2Component } from './dynamic-form2/dynamic-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermanagementComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    DataboardComponent,
    DataboardMainTableComponent,
    DataboardInputsComponent,
    DynamicformComponent,
    DynamicForm2Component
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	HttpModule,
	ReactiveFormsModule,
	RxReactiveFormsModule,
	RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
