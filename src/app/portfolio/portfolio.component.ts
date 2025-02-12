import { Component, Input } from '@angular/core';
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
export class PortfolioComponent {
  projects: Project[] = []; // Initialize as an empty array

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Rayen Ben Ouirane - Portfolio');
    this.projects = this.projectsService.GetProjects(); // Use 'this' to access class properties
  }
}
