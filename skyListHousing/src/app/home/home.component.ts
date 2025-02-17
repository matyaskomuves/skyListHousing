import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements AfterViewInit {

  // private observer: IntersectionObserver;

  // constructor() {
  //   this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry: IntersectionObserverEntry) => {
  //       if (entry.isIntersecting) {
  //         (entry.target as HTMLElement).classList.add('visible');
  //         console.log('Element is visible');
  //       } else {
  //         (entry.target as HTMLElement).classList.remove('visible');
  //         console.log('Element is not visible');
  //       }
  //     });
  //   });
  // }

  // ngAfterViewInit(): void {
  //   const hiddenElements: NodeListOf<HTMLElement> = document.querySelectorAll('.hidden');
  //   console.log('Found elements: ', hiddenElements.length); //Debug
  //   hiddenElements.forEach((element: HTMLElement) => {
  //     console.log('Observing elements: ', element); //Debug
  //     this.observer.observe(element);
  //   });
  // }
  private observer?: IntersectionObserver;

  constructor() { }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver(): void {
    const hiddenElements: NodeListOf<HTMLElement> = document.querySelectorAll('.hidden');

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      if (this.observer) {
        this.observer.disconnect();
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              this.observer!.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.5
        }
      );

      setTimeout(() => {
        hiddenElements.forEach((element) => this.observer!.observe(element));
      }, 500);
    } else {
      console.warn('IntersectionObserver not supported. Using fallback.');
      hiddenElements.forEach((element) => element.classList.add('visible'));
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}