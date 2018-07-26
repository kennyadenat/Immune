import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoresDetailComponent } from './heores-detail.component';

describe('HeoresDetailComponent', () => {
  let component: HeoresDetailComponent;
  let fixture: ComponentFixture<HeoresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeoresDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
