import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeModule } from './resume/resume.module';
import { ArticlesModule } from './articles/articles.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ArticlesModule,
    ProjectsModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
