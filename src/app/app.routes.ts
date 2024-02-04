import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableClient } from './components';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path:'home', component:TableClient },
    {
        path:'admin',
        component:DashboardComponent,
        children:[
            { path:'clients', component:TableClient },
        ]
    },
];
