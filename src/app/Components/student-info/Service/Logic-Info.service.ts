import { Injectable } from '@angular/core';
import { APIService } from 'src/app/Services/API.service';

@Injectable({
  providedIn: 'root'
})
export class LogicInfoService {

constructor(private service : APIService) { }

studentInfo(id :string):any{
  let info:any =[] 
  this.service.getById(id).subscribe((data : any) =>{
    info.push(data);
  })
  return info
  }
}
