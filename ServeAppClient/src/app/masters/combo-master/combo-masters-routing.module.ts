import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComboMasterComponent} from './combo-master.component';

const routes: Routes = [
  {
    path: '',
    component: ComboMasterComponent,
    data: {
      breadcrumb: 'Combo Masters',
      status: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComboMastersRoutingModule { }
