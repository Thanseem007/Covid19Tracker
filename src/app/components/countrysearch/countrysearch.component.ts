import { Component, OnInit, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { countries } from '../../models/countries';
import { ReportService } from '../../services/report.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-countrysearch',
  templateUrl: './countrysearch.component.html',
  styleUrls: ['./countrysearch.component.css']
})
export class CountrySearchComponent implements OnInit {

    countries$: Observable<countries[]>;
    private searchTerms = new Subject<string>();

  constructor(private reportService:ReportService) {}

  // Push a search term into the observable stream.
    search(term: string): void {
    this.searchTerms.next(term);
   }

  ngOnInit(): void {
      this.countries$ = this.searchTerms.pipe(
    // //   // wait 300ms after each keystroke before considering the term
       debounceTime(300),

    // //   // ignore new term if same as previous term
       distinctUntilChanged(),

    // //   // switch to new search observable each time the term changes
     switchMap((term: string) => this.reportService.searchCountry(term)),
      );
     
  }

}
