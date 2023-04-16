import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerTestComponent } from './marker-test.component';

describe('MarkerTestComponent', () => {
  let component: MarkerTestComponent;
  let fixture: ComponentFixture<MarkerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
