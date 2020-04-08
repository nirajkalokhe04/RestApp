import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    data: {
      breadcrumb: 'Order Items',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
