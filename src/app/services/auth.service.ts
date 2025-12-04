import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://principled-untyrannically-giuliana.ngrok-free.dev/auth';

  constructor(private http: HttpClient) { }

  // Helper method for ngrok header
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, 
      { username, password, role }, 
      { headers: this.getHeaders() }  // ADD THIS
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, 
      { username, password }, 
      { headers: this.getHeaders() }  // ADD THIS
    ).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', username);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}