import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeApiComponent } from './crime-api.component';

describe('CrimeApiComponent', () => {
  let component: CrimeApiComponent;
  let fixture: ComponentFixture<CrimeApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
