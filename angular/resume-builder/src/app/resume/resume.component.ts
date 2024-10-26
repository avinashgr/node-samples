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
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    },
    {
      id: 1,
      dateFrom: "",
      content:" Lorem ipsum odor amet, consectetuer adipiscing elit. Primis maecenas congue; ante accumsan dis velit sollicitudin. Luctus hendrerit efficitur et porta potenti, nisl non blandit. Purus vitae enim malesuada turpis aliquet mollis. Torquent dui commodo tincidunt phasellus ligula dis. Justo volutpat mauris laoreet faucibus fermentum nostra quis mauris. Tempor vehicula scelerisque litora donec purus. Fusce auctor tristique, diam orci integer semper. Habitant hendrerit pulvinar himenaeos montes malesuada eget.\
        Ornare in leo mus laoreet morbi eget. Molestie eget mollis elit mauris litora ut. Aptent viverra sollicitudin malesuada neque habitant commodo et. Vitae massa dapibus nulla; pellentesque blandit odio himenaeos integer. Nostra fringilla ligula eleifend nisi consequat eu vel praesent habitasse. Dignissim efficitur elit vestibulum urna himenaeos ridiculus turpis nec. Erat per sociosqu lectus dis malesuada venenatis. Fermentum purus morbi consectetur et eu aliquet mi. Libero venenatis purus sociosqu feugiat turpis pellentesque conubia vitae facilisi."
    }
  ]
}
