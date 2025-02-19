import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'more-benefits',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './more-benefits.component.html',
  styleUrl: './more-benefits.component.scss'
})
export class MoreBenefitsComponent {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.adjustImageSize();
      window.addEventListener('resize', this.adjustImageSize.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.adjustImageSize.bind(this));
    }
  }

  adjustImageSize(): void {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      const image = document.querySelector('section.main-section img') as HTMLImageElement;

      if (image) {
        if (screenWidth < 1080) {
          image.setAttribute('width', '300');
          image.setAttribute('height', '300');
        } else {
          image.setAttribute('width', '500');
          image.setAttribute('height', '500');
        }
      }
    }
  }

}
