import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCatalogueComponent } from './project-catalogue/project-catalogue.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProjectCatalogueComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ProjectCatalogueComponent
  ]
})
export class ResumeModule { }
