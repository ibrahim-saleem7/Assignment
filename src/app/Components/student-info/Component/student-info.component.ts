import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogicInfoService } from './../Service/Logic-Info.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit  {

  id : any;
  info :any
  
  constructor( private route : ActivatedRoute , private service : LogicInfoService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }



  ngOnInit() {
    this.info = this.service.studentInfo(this.id)
  }


}
