import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Project } from '../../models/project.model';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-available-projects',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css'
})
export class AvailableProject implements OnInit {
  projects = signal<Project[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.httpClient.get<Project[]>('http://localhost:8080/projects').pipe(
      delay(3000)
    ).subscribe({
      next: (resData) => {
        this.projects.set(resData);
      }
    });
    this.destroyRef.onDestroy(() => {subscription.unsubscribe()})
  }
}
