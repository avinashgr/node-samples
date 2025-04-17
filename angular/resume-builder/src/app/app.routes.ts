import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component'
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IntersectionWatcherDirective } from '../directives/intersection-watcher.directive';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
];
