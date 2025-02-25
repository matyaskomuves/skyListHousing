import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class NavbarComponent {

  isMenuOpen = false;
  isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth > 768;
    }

  }
}
