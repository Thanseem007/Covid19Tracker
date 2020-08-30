import { Component, Output,EventEmitter } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import {ReportService} from '../../services/report.service';


@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html'
           
})
export class typeahead {
  srcflag:string;
  placeholder:string;
  @Output() changeCountry = new EventEmitter();
   searchStr: string;
   captain: string;
   dataService: CompleterData;
   searchData = [
  
  ];
   captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private completerService: CompleterService,private reportService:ReportService ) {
    this.srcflag="https://www.countryflags.io/IN/shiny/32.png";
    this.reportService.searchCountry("").subscribe(re=>this.searchData=re,()=>{},()=>this.initialize())
    
  }
  initialize():void {
    console.log(this.searchData );
    this.dataService = this.completerService.local(this.searchData, 'Slug','Country');
    this.placeholder=this.searchData[125];
  }
  OnSelect(selected: CompleterItem):void
  {
    if(selected)
    {
    this.changeCountry.emit(selected.originalObject.Slug);
    this.srcflag="https://www.countryflags.io/"+selected.originalObject.ISO2+"/shiny/32.png";
    }

  }
}