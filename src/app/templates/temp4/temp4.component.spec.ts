import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp4Component } from './temp4.component';

describe('Temp4Component', () => {
  let component: Temp4Component;
  let fixture: ComponentFixture<Temp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
