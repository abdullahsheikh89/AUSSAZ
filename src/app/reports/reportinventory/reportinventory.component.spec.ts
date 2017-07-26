import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportinventoryComponent } from './reportinventory.component';

describe('ReportinventoryComponent', () => {
  let component: ReportinventoryComponent;
  let fixture: ComponentFixture<ReportinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
