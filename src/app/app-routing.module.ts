import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleIndexComponent } from './articles/article-index/article-index.component';
import { CvComponent } from './resume/cv/cv.component';
import { ProjectIndexComponent } from './projects/project-index/project-index.component';


const routes: Routes = [
  {
    path: 'articles',
    component: ArticleIndexComponent
  },
  {
    path: 'projects',
    component: ProjectIndexComponent
  },
  {
    path: 'resume',
    component: CvComponent
  },
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
