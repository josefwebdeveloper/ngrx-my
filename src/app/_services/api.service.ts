import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {All, Post} from '../models/models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<All>(`${environment.ApiUrl}/db`);
  }
}
