import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAppComponent } from './web-app.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  
  {
    path: '', component: WebAppComponent,
    children:[

      { path: 'home', component: HomeComponent},
      { path: 'course-detail', component: CourseDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppRoutingModule { }