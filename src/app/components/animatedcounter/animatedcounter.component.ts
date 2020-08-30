import { Component, OnInit,Input, ViewChild, ElementRef, AfterViewInit, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animatedcounter',
  templateUrl: './animatedcounter.component.html',
  styleUrls: ['./animatedcounter.component.css']
})
export class AnimatedcounterComponent implements AfterViewInit,OnChanges,OnInit {
  ngOnInit(): void {
  }
 
  @Input() counterType:number;
  animatedDigit:string;
  @Input() count:number;
  @Input() duration:number;
  @Input()  steps:number;
  @ViewChild("animatedDigit") animateddigit:ElementRef;
  constructor() { }

 ngAfterViewInit(){
  console.log(this.animateddigit);
  this.addClass(this.counterType);
   if(this.count)
   {
   this.animateCount();
   }
 }
 ngOnChanges(changes:SimpleChanges): void {
  if (changes["count"]) {
    this.animateCount();
  }
}

 animateCount()
 {
   if(!this.duration)
    {
      this.duration=1000;
    }
   if(typeof this.count ==="number")
   {
     
    this.counter(this.count,this.duration,this.animateddigit);
   }
 }

 counter(endValue,duration,element){
    if(!this.steps)
     {
       this.steps=12;
     }
     const stepCount=Math.abs(duration/this.steps);
     const valueIncrement=(this.count-0)/stepCount;
     const sinValueIncrement=Math.PI/stepCount;
     
     let currentValue=0;
     let currentSinValue=0;

     function step()
     {
      
       currentSinValue +=sinValueIncrement;
       currentValue +=valueIncrement*Math.sin(currentSinValue) ** 2 *2;
       if(element)
       element.nativeElement.textContent=Math.abs(Math.floor(currentValue));
       if(currentSinValue<Math.PI)
       {
         window.requestAnimationFrame(step);
       }
     }
     step();
 }


 addClass(counterType:number)
 {
  switch (counterType)
  {
    case 0:
    this.animateddigit.nativeElement.className="animated-digit case";
    return;
    case 1:
    this.animateddigit.nativeElement.className="animated-digit recover";
    return;
    case 2:
    this.animateddigit.nativeElement.className="animated-digit death";
    return;
  }
 }


}
