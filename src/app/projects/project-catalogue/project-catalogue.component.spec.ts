import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCatalogueComponent } from './project-catalogue.component';

describe('ProjectCatalogueComponent', () => {
  let component: ProjectCatalogueComponent;
  let fixture: ComponentFixture<ProjectCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
