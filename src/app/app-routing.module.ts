import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './layouts/full/full.component';
import { EnfantComponent } from './enfant/enfant/EnfantComponent';
import { ParentComponent } from './parent/component/parent/parent.component';
import { VaccinComponent } from './vaccin/component/vaccin/vaccin.component';
import { UtilisateurComponent } from './utilisateur/component/utilisateur/utilisateur.component';
import { CentreComponent } from './centre/component/centre/centre.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  {path:'',component:FullComponent,
     children:[
        {path:'enfant',component:EnfantComponent},
        {path:'parent',component:ParentComponent},
        {path:'vaccin',component:VaccinComponent},
        {path:'users',component:UtilisateurComponent},
        {path:'centre',component:CentreComponent}
       
  ]
},

  

  {
    path: 'cafe',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/cafe/dashboard',
        pathMatch: 'full',
      },
      
     
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
