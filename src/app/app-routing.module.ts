import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { LoginComponent } from './login/login.component';
import { DataboardComponent } from './databoard/databoard.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { DynamicForm2Component } from './dynamic-form2/dynamic-form2.component';

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
{
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'UserManagement',
    component: UsermanagementComponent
  },
  {
    path: 'Dynamicform',
    component: DynamicformComponent
  },
  {
    path: 'Databoard',
    component: DataboardComponent
  },
  {
    path: 'Dynamicform2',
    component: DynamicForm2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
