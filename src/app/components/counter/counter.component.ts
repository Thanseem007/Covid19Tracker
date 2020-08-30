import { Component, OnInit,Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {Report} from '../../models/report';
import {countries} from '../../models/countries'
import { ReportService } from '../../services/report.service';



@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges,OnInit {
  ngOnInit(): void {
    this.totaldeaths=0;
    this.totalCases=0;
    this.totalRecovery=0;
  }
 @Input() reports:Report;
 @Output() changeCountry = new EventEmitter();
 status = 'confirmed';
 totaldeaths:number;
 totalRecovery:number;
 totalCases:number;
  constructor() { }
  ngOnChanges(changes:SimpleChanges):void {
    if(this.reports)
    {
     this.bindnewdata();
    }
   

  }
  bindnewdata():void{
    console.log("test");
    this.totaldeaths=this.reports.TotalDeath;
      this.totalCases=this.reports.TotalCases;
      this.totalRecovery=this.reports.TotalRecovery;
  }
  change(countrySlug):void
  {
    if(countrySlug)
    this.changeCountry.emit(countrySlug);
   console.log(countrySlug);
  }
 
}
