import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Project } from '../../models/project.model';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, throwError } from 'rxjs';
import { ProjectsComponent } from '../projects.component';

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
  private httpClient = inject(HttpClient);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.httpClient.get<Project[]>('http://localhost:8080/projects').pipe(
      delay(3000),
      catchError((error) => {
        console.log('Error do backend:', error);
        const errorMessage = error.error?.message || 'Algo deu errado na busca dos projetos. Por favor tente mais tarde.';
        this.error.set(errorMessage);
        return throwError(() => new Error(errorMessage))
      })
    ).subscribe({
      next: (resData) => {
        this.projects.set(resData);
        this.error.set(null);
      },
      error: (error: Error) => {
        console.log('Erro processado:', error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });
    this.destroyRef.onDestroy(() => {subscription.unsubscribe()})
  }
}
