import { Component, OnInit, Output,EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartLineOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Report } from '../../models/report';
import {ReportService} from '../../services/report.service';
import {Input,SimpleChanges} from '@angular/core';



@Component({
  selector: 'app-chart',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})


export class GraphComponent implements OnChanges  {
  @Input() reports:Report;
  ngOnChanges(changes: SimpleChanges): void {
    if(this.reports)
    {
    this.initialize();
    }
    
  }
  constructor() { }
  public barChartOptions= {
    responsive: true,
    scales: { xAxes: [{
      
        gridLines : {
            display : false}
        
  }], yAxes: [{}] },
  };
 
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {
    data: [], label: 'New' ,
   
    backgroundColor:'rgba(65, 131, 215, 1)',
    fill:false,
    borderColor:'rgba(65, 131, 215, 1)',
    pointRadius:3,
    pointHoverBackgroundColor:'rgba(219, 10, 91, 1)',
    pointBackgroundColor:'rgba(65, 131, 215, 1)',
    pointBorderColor:'rgba(65, 131, 215, 1)'
   },
   {
    data: [], label: 'Recovered' ,
   
    backgroundColor:'#28a745',
    fill:false,
    borderColor:'#28a745',
    pointRadius:3,
    pointHoverBackgroundColor:'rgba(219, 10, 91, 1)',
    pointBackgroundColor:'#28a745',
    pointBorderColor:'#28a745'
   }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
    this.barChartData[0].fill=this.barChartType === 'bar'?true:false;
  }
  initialize():void
  {
   this.barChartData[0].data=this.reports.cases;
   this.barChartData[1].data=this.reports.recovered;
   this.barChartLabels=this.reports.dateTimes;
  
  }
}