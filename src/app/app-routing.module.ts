import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RatechartComponent } from './ratechart/ratechart.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ServiceComponent } from './service/service.component';
import { WorkprocessComponent } from './workprocess/workprocess.component';
import {LocationComponent} from '../app/location/location.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path: 'ratechart', component:RatechartComponent},
  {path: 'reachus', component:ReachusComponent},
  {path: 'service', component:ServiceComponent},
  {path: 'workprocess', component:WorkprocessComponent},
  {path: 'login', component:LoginComponent},
  {path: 'location', component:LocationComponent},
  {path: 'paginator', component:PaginatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
