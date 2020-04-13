import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupMasterComponent } from './customer-group-master.component';

describe('CustomerGroupMasterComponent', () => {
  let component: CustomerGroupMasterComponent;
  let fixture: ComponentFixture<CustomerGroupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGroupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
