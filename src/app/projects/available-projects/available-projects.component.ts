import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { catchError, delay, throwError } from 'rxjs';

import { Project } from '../../models/project.model';
import { ProjectsComponent } from '../projects.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-available-projects',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './available-projects.component.html',
  styleUrl: './available-projects.component.css'
})
export class AvailableProject implements OnInit {
  projects = signal<Project[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  error = signal<string | null>(null);
  private projectService = inject(ProjectService);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.projectService.loadAvailableProjects().subscribe({
      next: (resData) => {
        this.projects.set(resData);
        this.error.set(null);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });
    this.destroyRef.onDestroy(() => {subscription.unsubscribe()})
  }
}
