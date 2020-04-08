import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetiingsComponent} from './setiings.component';

const routes: Routes = [
  {
    path: '',
    component: SetiingsComponent,
    data: {
      breadcrumb: 'Settings',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
