import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl } from '@angular/forms'
import { DataService } from '../data.service';
  import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  form : FormGroup ;
  
  student : any = [];


  getStudentData(){

    this.dataservice.getData().subscribe((res)=>{

      this.student = res

    })

  }

  id :number;

  graduation_stream : string[] = ["Mech","IT","Comp","E & TC","Elect"];

  constructor(private dataservice:DataService,private activatedrouter:ActivatedRoute,private router:Router) { }

  update(){

    // this.student.push(this.form.value)
  //  console.log(this.form.value)
  this.dataservice.updateData(this.id,this.form.value).subscribe((res)=>{

      alert("Data updated successfully")

      this.router.navigateByUrl("/");

  })
  }


  

  ngOnInit(): void {  

    this.activatedrouter.params.subscribe((param)=>{this.id = param["id"]
    
      this.id = param["id"]

     this.dataservice.getDataById(this.id).subscribe((data)=>{

      this.student = data
        
    this.form = new FormGroup({

      student_name : new FormControl(this.student.student_name),
      student_email : new FormControl(this.student.student_email),
      student_age : new FormControl(this.student.student_age),
      student_isGraduate : new FormControl(this.student.student_isGraduate),   
      student_branch: new FormControl(this.student.student_branch  ), 


     })
     // console.log(this.id);
  
  
  })


  })

}

}