import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {
  private baseUrl = 'http://localhost:7979/uploadFile';
  constructor(private http: HttpClient) { }

  
}


