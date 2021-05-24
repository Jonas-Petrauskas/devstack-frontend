import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Company } from '../interfaces/Company';
import { Country } from '../interfaces/Country';
import { DeveloperType } from '../interfaces/DeveloperType';
import { ExperienceLevel } from '../interfaces/ExperienceLevel';
import { Technology } from '../interfaces/Technology';
import { Developer } from '../interfaces/Developer';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  baseUrl: string = 'http://localhost:3005';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.baseUrl}/countries`)
      .pipe(map((techs: Country[]) => techs.map(country => ({...country, tagName: country.name}))))
      .pipe(catchError(this.handleError<Country[]>([])));
  }

  getDeveloperTypes(): Observable<DeveloperType[]> {
    return this.http
      .get<DeveloperType[]>(`${this.baseUrl}/developer_types`)
      .pipe(map((devs: DeveloperType[]) => devs.map(dev => ({...dev, tagName: dev.name}))))
      .pipe(catchError(this.handleError<DeveloperType[]>([])));
  }

  getExperienceLevels(): Observable<ExperienceLevel[]> {
    return this.http
      .get<ExperienceLevel[]>(`${this.baseUrl}/experience_levels`)
      .pipe(map((levels: ExperienceLevel[]) => levels.map(level => ({...level, tagName: level.name}))))
      .pipe(catchError(this.handleError<ExperienceLevel[]>([])));
  }

  getTechnologies(): Observable<Technology[]> {
    return this.http
      .get<Technology[]>(`${this.baseUrl}/technologies`)
      .pipe(map((techs: Technology[]) => techs.map(tech => ({...tech, tagName: tech.name}))))
      .pipe(catchError(this.handleError<Technology[]>([])));
  }

  getAllDevelopers(): Observable<Developer[]> {
    return this.http
      .get<Developer[]>(`${this.baseUrl}/developers`)
      .pipe(catchError(this.handleError<Developer[]>([])));
  }

  getFilteredDevelopers(query: string): Observable<Developer[]> {
    return this.http
      .get<Developer[]>(`${this.baseUrl}/developers/${query}`)
      .pipe(catchError(this.handleError<Developer[]>([])));
  }

  loginAsCompany(username: string, password: string): Observable<Company | null> {
    return this.http
      .post<Company>(`${this.baseUrl}/login/company`, { username, password })
      .pipe(catchError(this.handleError<Company | null>(null)));
  }

  loginAsDeveloper(email: string, password: string): Observable<Developer | null> {
    return this.http
      .post<Developer>(`${this.baseUrl}/login/developer`, { email, password })
      .pipe(catchError(this.handleError<Developer | null>(null)));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
