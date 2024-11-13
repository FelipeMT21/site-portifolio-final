import { Component, input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = input.required<Project[]>();
}