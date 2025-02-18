import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl = '/api';

  constructor(private http: HttpClient) { }

  sendData(name: string, email:string){
    const data = {name, email};

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);    
  }
}
