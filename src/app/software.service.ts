// software.service.ts (Angular)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISoftware } from './Interfaces/ISoftware';

@Injectable({
  providedIn: 'root',
})
export class SoftwareService {
  private apiUrl = 'http://localhost:3000/software'; // Ajusta según la ruta de tu servidor backend

  constructor(private http: HttpClient) {}

  getSoftwareList(): Observable<ISoftware[]> {
    return this.http.get<ISoftware[]>(`${this.apiUrl}/list`);
  }

  insertMultipleSoftware(data: { create: ISoftware[] }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/insert-multiple`, data);
  }
}
