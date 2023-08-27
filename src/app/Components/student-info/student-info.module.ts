import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentInfoComponent } from 'src/app/Components/student-info/Component/student-info.component';

const routes: Routes = [
  { path: 'info/:id', component:StudentInfoComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentInfoComponent]
})
export class StudentInfoModule { }
