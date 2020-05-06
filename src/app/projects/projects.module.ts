import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { ProjectIndexComponent } from './project-index/project-index.component';
import { ProjectCatalogueComponent } from './project-catalogue/project-catalogue.component';


@NgModule({
  declarations: [ProjectViewerComponent, ProjectIndexComponent, ProjectCatalogueComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class ProjectsModule { }
