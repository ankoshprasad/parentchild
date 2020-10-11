import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataboardInputsComponent } from './databoard-inputs.component';

describe('DataboardInputsComponent', () => {
  let component: DataboardInputsComponent;
  let fixture: ComponentFixture<DataboardInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataboardInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataboardInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
