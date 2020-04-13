import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenMasterComponent } from './kitchen-master.component';

describe('KitchenMasterComponent', () => {
  let component: KitchenMasterComponent;
  let fixture: ComponentFixture<KitchenMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
