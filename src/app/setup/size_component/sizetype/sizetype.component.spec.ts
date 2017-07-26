import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizetypeComponent } from './sizetype.component';

describe('SizetypeComponent', () => {
  let component: SizetypeComponent;
  let fixture: ComponentFixture<SizetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
