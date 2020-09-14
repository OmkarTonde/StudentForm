import { Component, OnInit } from '@angular/core';
import {Student} from './student'
import{FormGroup,FormControl } from '@angular/forms'
import { DataService } from '../data.service';


@Component({
  selector: 'app-studentreg-form',
  templateUrl: './studentreg-form.component.html',
  styleUrls: ['./studentreg-form.component.css']
})
export class StudentregFormComponent implements OnInit {

  form : FormGroup ;
  
  student : any = [];


  getStudentData(){

    this.dataservice.getData().subscribe((res)=>{

      this.student = res

    })

  }


  graduation_stream : string[] = ["Mech","IT","Comp","E & TC","Elect"];

  constructor(private dataservice:DataService) { }

  register(){

    // this.student.push(this.form.value)
  //  console.log(this.form.value)
  this.dataservice.saveData(this.form.value).subscribe((res)=>{

      alert("Data saved successfully")

  })
  }

  ngOnInit(): void {  


    this.form = new FormGroup({

      student_name : new FormControl(""),
      student_email : new FormControl(""),
      student_age : new FormControl(""),
      student_isGraduate : new FormControl(""),   
      student_branch: new FormControl(this.graduation_stream[1]), 

      
    })


  }

}