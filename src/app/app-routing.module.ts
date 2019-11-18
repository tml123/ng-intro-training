import { LessonResolver } from './services/lesson-resolver.service';
import { LessonDisplayComponent } from './components/lesson-display/lesson-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: ':lesson',
    component: LessonDisplayComponent,
    resolve: { lesson: LessonResolver },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
