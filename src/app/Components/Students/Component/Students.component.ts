import {  Component,  OnInit,  } from '@angular/core';
import { LogicService } from '../Service/Logic.service';
import { APIService } from 'src/app/Services/API.service';

@Component({
  selector: 'app-Students',
  templateUrl: './Students.component.html',
  styleUrls: ['./Students.component.css']
})
export class StudentsComponent implements OnInit  {

  Students : any
  constructor( private service : LogicService) {
    
  }

  ngOnInit() {
    this.Students = this.service.allStudents()
  }

}
