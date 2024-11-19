import { Component, signal } from '@angular/core';
import { skills } from '../models/skill.data';
import { skill } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = signal<skill[]>(skills);
}
