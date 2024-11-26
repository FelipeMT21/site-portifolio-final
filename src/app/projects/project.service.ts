import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, throwError } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private httpClient = inject(HttpClient);
  private projects = signal<Project[]>([]);
  private urlLocal = 'http://localhost:8080/projects';
  private url = environment.apiUrl;

  loadProjects = this.projects.asReadonly();

  loadAvailableProjects() {
    return this.fetchProjects(this.urlLocal);
  }

  loadAllAvailableProjects() {}

  addProject(project: Project) {}

  removeProject(project: Project) {}

  private fetchProjects(url: string) {
    return this.httpClient.get<Project[]>(url).pipe(
      delay(3000),
      catchError((error) => {
        console.log('Error do backend:', error);
        const errorMessage = 'Algo deu errado na busca dos projetos. Por favor tente mais tarde.';
        return throwError(() => new Error(errorMessage))
      })
    )
  }
}
