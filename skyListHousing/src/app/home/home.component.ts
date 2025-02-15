import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
      ])
    ])
  ]
})
export class HomeComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  isVisible = false;

  checkScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}