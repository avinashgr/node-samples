import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { IntersectionWatcherDirective } from '../../directives/intersection-watcher.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NavbarComponent,IntersectionWatcherDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
}
