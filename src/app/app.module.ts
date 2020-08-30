import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './components/counter/counter.component';
import { AnimatedcounterComponent } from './components/animatedcounter/animatedcounter.component';
import { CountrySearchComponent } from './components/countrysearch/countrysearch.component';
import { typeahead } from './components/typeahead/typeahead.component';
import { Ng2CompleterModule } from "ng2-completer";




@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    CounterComponent,
    AnimatedcounterComponent,
    CountrySearchComponent,
    typeahead,    
    
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
