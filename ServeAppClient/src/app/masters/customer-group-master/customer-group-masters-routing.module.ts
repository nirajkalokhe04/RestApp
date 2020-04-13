import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerGroupMasterComponent} from './customer-group-master.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerGroupMasterComponent,
    data: {
      breadcrumb: 'Customer Group Masters',
      status: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerGroupRoutingModule { }
