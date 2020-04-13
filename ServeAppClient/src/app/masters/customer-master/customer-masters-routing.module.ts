import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerMasterComponent} from './customer-master.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerMasterComponent,
    data: {
      breadcrumb: 'Customer Masters',
      status: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMastersRoutingModule { }
