import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from './services/report.service';
import {Report} from './models/report';
import {GraphComponent} from '../app/components/graph/graph.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reports:Report;
  title = 'CovidReport';
  @Input() country :string;
  status = 'confirmed';

  ngOnInit(): void {
    this.country="india"
    this.getReport(this.country);
  }
  

  /**
   *
   */
  constructor(private reportService:ReportService) {
  }   
  getReport(country):void
  {
    console.log(country)
    this.reportService.getReport(this.status,country).subscribe(re=>this.reports=re,()=>{},()=>{});
  }

}
