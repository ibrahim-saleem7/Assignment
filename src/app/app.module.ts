import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './Components/Students/Component/Students.component';
import { StudentInfoModule } from './Components/student-info/student-info.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StudentInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
