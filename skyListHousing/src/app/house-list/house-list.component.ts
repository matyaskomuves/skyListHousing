import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-house-list',
  imports: [CommonModule],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent {
  houses = [
    { id: 1, image: 'webaliser-_TPTXZd9mOo-unsplash.jpg', name: 'Sleek, modern house in Italy', location: 'Italy', price: 250000, description: 'Luxurious peace in the outskirts of sun-bathed Italy. Modern, sleek design with 3 bedrooms, 2 bathrooms, a hidden 2-car garage, and a pool.' },
    { id: 2, image: 'r-architecture-KQPEhYweLrQ-unsplash.jpg', name: 'A french home with mix of traditional wood and modern solutions', location: 'France', price: 300000, description: 'This is a placeholder for further description :) This is a placeholder for further description :)' },
    { id: 3, image: 'vu-anh-TiVPTYCG_3E-unsplash.jpg', name: 'Lovely, modern take on a cottage on the French countryside', location: 'France', price: 220000, description: 'This is a placeholder for further description :)This is a placeholder for further description :)' },
    { id: 4, image: 'sieuwert-otterloo-aren8nutd1Q-unsplash.jpg', name: 'Spacious family home with an equally spacious yard', location: 'Netherlands', price: 280000, description: 'This is a placeholder for further description :)This is a placeholder for further description :)' },
    { id: 5, image: 'etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg', name: 'Two-story elegance, nested in the heart of Finland', location: 'Finland', price: 350000, description: 'This is a placeholder for further description :)This is a placeholder for further description :)' },
  ];

}
