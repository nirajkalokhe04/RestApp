import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'item-master',
        loadChildren: () => import('./masters/item-master/item-masters.module').then(m => m.ItemMastersModule)
      },
      {
        path: 'customer-master',
        loadChildren: () => import('./masters/customer-master/customer-masters.module').then(m => m.CustomerMastersModule)
      },
      {
        path: 'combo-master',
        loadChildren: () => import('./masters/combo-master/combo-masters.module').then(m => m.ComboMastersModule)
      },
      {
        path: 'customer-group-master',
        loadChildren: () => import('./masters/customer-group-master/customer-group-masters.module').then(m => m.CustomerGroupMastersModule)
      },
      {
        path: 'category-master',
        loadChildren: () => import('./masters/category-master/category-masters.module').then(m => m.CategoryModule)
      },
      {
        path: 'kitchen-master',
        loadChildren: () => import('./masters/kitchen-master/kitchen-masters.module').then(m => m.KitchenMastersModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }, {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
      }, {
        path: 'masters',
        loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule)
      }, {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }, {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      }, {
        path: 'settings',
        loadChildren: () => import('./setiings/settings.module').then(m => m.SettingsModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./components/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./components/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'forms',
        loadChildren: () => import('./components/forms/basic-elements/basic-elements.module').then(m => m.BasicElementsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./components/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'simple-page',
        loadChildren: () => import('./simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
