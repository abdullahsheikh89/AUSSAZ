import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorgroupComponent } from './colorgroup.component';

describe('ColorgroupComponent', () => {
  let component: ColorgroupComponent;
  let fixture: ComponentFixture<ColorgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
