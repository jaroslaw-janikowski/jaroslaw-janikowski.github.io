import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { ArticleIndexComponent } from './article-index/article-index.component';



@NgModule({
  declarations: [ArticleViewerComponent, ArticleIndexComponent],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }
