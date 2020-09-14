import { Component, OnInit } from '@angular/core';
  import { DataService } from '../data.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student :any = [];

  constructor(private dataservice:DataService) { }

  getStudentData(){

    this.dataservice.getData().subscribe((res)=>{

      this.student = res

    })

  }


  delete(id){

    this.dataservice.deleteData(id).subscribe((res)=>{

      alert("Data deleted Successfully")

      this.getStudentData()


    })

  }

  ngOnInit(): void {

    this.getStudentData();
  }

}
