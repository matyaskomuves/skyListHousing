import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements AfterViewInit, OnDestroy {

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

  @ViewChildren('hiddenElement') hiddenElements!: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver(): void {
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
        this.hiddenElements.forEach((element) => this.observer!.observe(element.nativeElement));
      }, 500);
    } else {
      console.warn('IntersectionObserver not supported. Using fallback.');
      this.hiddenElements.forEach((element) => element.nativeElement.classList.add('visible'));
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  teamMembers = [
    { id: 1, name: 'John Doe', position: 'Founder & CEO', image: 'john-doe.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Property Management', image: 'jane-doe.jpg' },
    { id: 3, name: 'Alice Johnson', position: 'Leasing Consultant', image: 'alice-johnson.jpg' },
    { id: 4, name: 'Bob Brown', position: 'Marketing & Public Relations', image: 'bob-brown.jpg' },
    { id: 5, name: 'Charlie Wilson', position: 'Sales & Recruitment', image: 'charles-wilson.jpg' },
  ]

}