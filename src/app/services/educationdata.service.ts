import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EducationdataService {

  private _educationLocation = '../../assets/json/education.json';

  constructor(private http: Http) { }

  // Get Education from json
  getEducation(): Observable<any[]> {
    return this.http
      .get(this._educationLocation)
      .pipe(map((response: Response) => {
        return <any[]>response.json();
      }), catchError(this.handleError));
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}