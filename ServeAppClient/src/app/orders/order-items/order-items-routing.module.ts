import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderItemsComponent} from './order-items.component';

const routes: Routes = [
  {
    path: '',
    component: OrderItemsComponent,
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
export class OrderItemsRoutingModule { }
