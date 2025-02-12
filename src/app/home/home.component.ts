import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProject = {} as Project // Initialize as an empty array
  constructor(private titleService:Title, private projectsService : ProjectsService){
    this.titleService.setTitle('Rayen Ben Ouirane - Home');
    this.featuredProject = projectsService.GetProjectsById(1)

  }
}
