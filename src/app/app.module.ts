import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ReactiveFormsModule} from '@angular/forms';
import { StudentregFormComponent } from './studentreg-form/studentreg-form.component'
import{HttpClientModule} from '@angular/common/http'
import{DataService} from './data.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component' 

@NgModule({
  declarations: [
    AppComponent,
    StudentregFormComponent,
    StudentDashboardComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
