import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];
  allTags: Tag[] = [];                       // tous les tags disponibles dans le filtre
  selectedTags = new Set<Tag>();             // tags cochés

  IsCollapsed: boolean = true;
  filteering: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Rayen Ben Ouirane - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
    this.allTags = this.buildTagList(this.projects);
  }

  /** Récupère les tags uniques de tous les projets, triés par nom */
  private buildTagList(projects: Project[]): Tag[] {
    const unique = new Set<Tag>();
    projects.forEach(p => p.tags.forEach(t => unique.add(t)));
    return Array.from(unique).sort((a, b) =>
      this.tagLabel(a).localeCompare(this.tagLabel(b))
    );
  }

  /** Nom lisible du tag (fonctionne avec un enum numérique ou string) */
  tagLabel(tag: Tag): string {
    return typeof tag === 'number' ? Tag[tag] : String(tag);
  }

  isSelected(tag: Tag): boolean {
    return this.selectedTags.has(tag);
  }

  toggleTag(tag: Tag): void {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
    this.Filter();
  }

  Filter(): void {
    this.filteering = this.selectedTags.size > 0;
    this.projects = this.projectsService.GetProjectByFilter(Array.from(this.selectedTags));
  }

  ResetFilters(): void {
    this.selectedTags.clear();
    this.filteering = false;
    this.projects = this.projectsService.GetProjects();
  }
}