import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {
    path:"", component:DashboardComponent

  },
  // {
  //   path:'', redirectTo:'dashboard' , pathMatch:'full'
  //   //pathmatch as 'full' means when user open localhost:4200 it will automatically goto dashboard path 
  // },
  {
    path:'employees', component:EmployeesComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'contacts', component:ContactsComponent
  },
  {
    path:'leads', component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
