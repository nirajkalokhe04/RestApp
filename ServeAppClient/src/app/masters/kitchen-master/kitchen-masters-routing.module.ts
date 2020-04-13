import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KitchenMasterComponent} from './kitchen-master.component';

const routes: Routes = [
  {
    path: '',
    component: KitchenMasterComponent,
    data: {
      breadcrumb: 'Kitchen Masters',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenMastersRoutingModule { }
