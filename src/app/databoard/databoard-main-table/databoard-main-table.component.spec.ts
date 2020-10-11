import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataboardMainTableComponent } from './databoard-main-table.component';

describe('DataboardMainTableComponent', () => {
  let component: DataboardMainTableComponent;
  let fixture: ComponentFixture<DataboardMainTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataboardMainTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataboardMainTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
