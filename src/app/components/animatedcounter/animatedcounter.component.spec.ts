import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedcounterComponent } from './animatedcounter.component';

describe('AnimatedcounterComponent', () => {
  let component: AnimatedcounterComponent;
  let fixture: ComponentFixture<AnimatedcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
