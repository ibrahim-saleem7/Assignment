import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/Students/Component/Students.component';

const routes: Routes = [
  { path: '', redirectTo:'students', pathMatch :"full"},
  { path: 'students', component : StudentsComponent},
  {
    path: 'student', 
    loadChildren: () => import('src/app/Components/student-info/student-info.module').then(m => m.StudentInfoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
