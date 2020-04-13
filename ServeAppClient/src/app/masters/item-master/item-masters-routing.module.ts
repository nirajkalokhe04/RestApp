import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemMasterComponent} from './item-master.component';

const routes: Routes = [
  {
    path: '',
    component: ItemMasterComponent,
    data: {
      breadcrumb: 'Item Masters',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemMastersRoutingModule { }
