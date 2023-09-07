import { Injectable } from '@angular/core';
import { Footballer } from '../models/footballers';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FootballersService {

  private url = "Footballer";

  constructor(private http:HttpClient) { }

  public getFootballers(): Observable<Footballer[]> {
    return this.http.get<Footballer[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateFootballer(footballer: Footballer): Observable<Footballer[]> {
    return this.http.put<Footballer[]>(`${environment.apiUrl}/${this.url}`, footballer);
  }

  public createFootballer(footballer: Footballer): Observable<Footballer[]> {
    return this.http.post<Footballer[]>(`${environment.apiUrl}/${this.url}`, footballer);
  }

  public deleteFootballer(footballer: Footballer): Observable<Footballer[]> {
    return this.http.delete<Footballer[]>(`${environment.apiUrl}/${this.url}/${footballer.id}`);
  }
}
