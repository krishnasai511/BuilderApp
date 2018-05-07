import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp3Component } from './temp3.component';

describe('Temp3Component', () => {
  let component: Temp3Component;
  let fixture: ComponentFixture<Temp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
