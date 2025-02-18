import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { MoreBenefitsComponent } from '../more-benefits/more-benefits.component';
import { InfoFooterComponent } from '../info-footer/info-footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsletterFormComponent,
    MoreBenefitsComponent,
    InfoFooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

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