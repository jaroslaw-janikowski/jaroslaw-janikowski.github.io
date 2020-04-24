import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'project-catalogue',
  templateUrl: './project-catalogue.component.html',
  styleUrls: ['./project-catalogue.component.css']
})
export class ProjectCatalogueComponent implements OnInit {
  public items = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/project-catalogue/data.json').subscribe(response => {
      this.items = response['projects'];
    });
  }

}
