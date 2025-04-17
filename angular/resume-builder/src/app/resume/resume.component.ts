import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { IntersectionWatcherDirective } from '../../directives/intersection-watcher.directive';
import { ResumeSection } from '../../types/resumesection';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [IntersectionWatcherDirective,NgFor],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  //add the resume sections here
  resumeSections:ResumeSection[] = []
  constructor (){

    for (var i=0; i<=100 ; i++){
      this.resumeSections.push(
        {
          id: 1,
          dateFrom: "",
          content:"All men are created equal"
        }
      )
    }
  }

}
