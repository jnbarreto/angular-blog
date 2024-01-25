import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    { url: 'https://via.placeholder.com/800x300?text=1' },
    { url: 'https://via.placeholder.com/800x300?text=2' },
    { url: 'https://via.placeholder.com/800x300?text=3' },
    { url: 'https://via.placeholder.com/800x300?text=4' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
