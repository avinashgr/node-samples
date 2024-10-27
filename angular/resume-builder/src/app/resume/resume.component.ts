import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { IntersectionWatcherDirective } from '../../directives/intersection-watcher.directive';
import { ResumeSection } from '../../types/resumesection';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NavbarComponent,IntersectionWatcherDirective,NgFor],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  //add the resume sections here
  resumeSections:ResumeSection[] = [
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    },
    {
      id: 1,
      dateFrom: "",
      content:"Everybody is innocent until proven guilty"
    }
  ]
}
