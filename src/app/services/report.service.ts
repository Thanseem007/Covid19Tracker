import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Report} from '../models/report';
import {countries} from '../models/countries';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http:HttpClient) { }
private reportUrl ="http://localhost:53619/api/Report/"
getReport(status:string,country:string):Observable<Report>
{
return this.http.get<Report>(this.reportUrl+"Get?country="+country+"&status="+status)
.pipe(
  catchError(this.handleError<Report>("getReport",))
);
}

/* GET heroes whose name contains search term */
searchCountry(term: string): Observable<countries[]> {
 
  return this.http.get<countries[]>(`${this.reportUrl}/Search?str=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<countries[]>('searchCountry', []))
  );
}


///Error Log
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/** Log a HeroService message with the MessageService */
private log(message: string) {
  
}

}
