import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'info-footer',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './info-footer.component.html',
  styleUrl: './info-footer.component.scss'
})
export class InfoFooterComponent {

}
