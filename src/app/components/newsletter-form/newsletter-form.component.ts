import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { NotificationServiceService } from '../../services/notification-service.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'newsletter-form',
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    NewsletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {

  isVisible = true; 
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(
    private newsletterService: NewsletterService,
    private toastrService: ToastrService
  ) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  showSuccess() {
    this.toastrService.success('Cadastro realizado com sucesso!', '', {
      positionClass: 'toast-top-right', 
      timeOut: 3000, 
      progressBar: true,
      closeButton: true
    });
  }

  onSubmit(): void {
    this.loading.set(true);
    if (this.newsletterForm.valid) {
      setTimeout(() => {
        this.showSuccess();
        this.loading.set(false);

        this.isVisible = false;
        
        setTimeout(() => {
          this.newsletterForm.reset();
          this.isVisible = true; 
        }, 500); 
      }, 1000);
    } else {
      this.loading.set(false);
    }
  }
}
