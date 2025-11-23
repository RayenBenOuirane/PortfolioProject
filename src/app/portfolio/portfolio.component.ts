import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone:false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = []; // Initialize as an empty array

  IsCollapsed : boolean = true;

  typescript : boolean = false;

  angular : boolean = false;

  fxml : boolean = false;

  csharp : boolean = false;

  java : boolean = false;

  cpp : boolean = false;

  c : boolean = false;

  javafx : boolean = false;

  bootstrap : boolean = false;

  wpf : boolean = false;

  filteering : boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Rayen Ben Ouirane - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
  Filter(){
    this.filteering = true;
    let filterTags : Tag[] = [];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.cpp){
      filterTags.push(Tag.CPP);
    }
    if(this.c){
      filterTags.push(Tag.C);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.javafx){
      filterTags.push(Tag.JAVAFX);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.wpf){
      filterTags.push(Tag.WPF);
    }
    this.projects = this.projectsService.GetProjectByFilter(filterTags);
  }
  ResetFilters(){
    this.angular=false;
    this.typescript=false;
    this.wpf=false;
    this.java=false;
    this.c=false;
    this.cpp=false;
    this.csharp=false;
    this.javafx=false;
    this.bootstrap=false;
    this.filteering=false;

    this.projects = this.projectsService.GetProjects();
  }
}
