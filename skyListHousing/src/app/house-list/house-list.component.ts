import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-house-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css',
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
export class HouseListComponent {
  houses = [
    {
      id: 1, image: 'webaliser-_TPTXZd9mOo-unsplash.jpg',
      name: 'Sleek, modern house in Italy',
      location: 'Italy',
      price: 250000,
      description: 'Luxurious peace in the outskirts of sun-bathed Italy. Modern, sleek design with 3 bedrooms, 2 bathrooms, a hidden 2-car garage, and a pool.',
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 2,
      image: 'r-architecture-KQPEhYweLrQ-unsplash.jpg',
      name: 'A french home with mix of traditional wood and modern solutions',
      location: 'France',
      price: 300000,
      description: 'This is a placeholder for further description :) This is a placeholder for further description :)',
      bedrooms: 4,
      bathrooms: 2,
    },
    {
      id: 3,
      image: 'vu-anh-TiVPTYCG_3E-unsplash.jpg',
      name: 'Lovely, modern take on a cottage on the French countryside',
      location: 'France',
      price: 220000,
      description: 'This is a placeholder for further description :)This is a placeholder for further description :)',
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 4,
      image: 'sieuwert-otterloo-aren8nutd1Q-unsplash.jpg',
      name: 'Spacious family home with an equally spacious yard',
      location: 'Netherlands',
      price: 280000,
      description: 'This is a placeholder for further description :)This is a placeholder for further description :)',
      bedrooms: 4,
      bathrooms: 2
    },
    {
      id: 5,
      image: 'etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg',
      name: 'Two-story elegance, nested in the heart of Finland',
      location: 'Finland',
      price: 350000,
      description: 'This is a placeholder for further description :)This is a placeholder for further description :)',
      bedrooms: 5,
      bathrooms: 3
    },
  ];

  filteredHouses = [...this.houses];
  filterForm: FormGroup;

  showFilters = false;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      location: [''],
      minPrice: [''],
      maxPrice: [''],
      bedrooms: [''],
      bathrooms: ['']
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  ngOnInit() {
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    })
  }

  applyFilters() {
    const { location, minPrice, maxPrice, bedrooms, bathrooms } = this.filterForm.value;

    this.filteredHouses = this.houses.filter((house) => {
      return (
        (!location || house.location.toLowerCase().includes(location.toLowerCase())) &&
        (!minPrice || house.price >= +minPrice) &&
        (!maxPrice || house.price <= +maxPrice) &&
        (!bedrooms || house.bedrooms === +bedrooms) &&
        (!bathrooms || house.bathrooms === +bathrooms)
      );
    });
  }
}