import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { WebAppComponent } from './web-app.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    WebAppComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }