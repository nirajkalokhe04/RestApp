import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetiingsComponent } from './setiings.component';

describe('SetiingsComponent', () => {
  let component: SetiingsComponent;
  let fixture: ComponentFixture<SetiingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetiingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetiingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
