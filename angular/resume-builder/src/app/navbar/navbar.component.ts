import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  pageScrollPercentage:number = 3

  // changeProgress() {
  //   setInterval(() => {
  //     if (this.pageScrollPercentage < 100) {
  //       this.pageScrollPercentage += 2;
  //     }
  //   }, 1000);
  // }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.pageScrollPercentage = Math.round((scrollTop / scrollHeight) * 100);
  }

}
