import { Injectable } from '@angular/core';
import { APIService } from 'src/app/Services/API.service';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

constructor(private service : APIService ) { }


  allStudents() : any {
    let allStudents:any =[] 
    this.service.getAll().subscribe((data : any[]) =>{
      allStudents.push(...data);
    })
    return allStudents
  }
}
