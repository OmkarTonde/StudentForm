import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentregFormComponent } from './studentreg-form/studentreg-form.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [ 

{path:"reg",component:StudentregFormComponent},
{path:" ",component:StudentDashboardComponent},
{path:"",component:StudentDashboardComponent},
{path:"update/:id",component:UpdatestudentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
