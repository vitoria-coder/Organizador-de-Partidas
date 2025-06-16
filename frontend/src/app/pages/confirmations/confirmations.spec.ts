import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmations } from './confirmations';

describe('Confirmations', () => {
  let component: Confirmations;
  let fixture: ComponentFixture<Confirmations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confirmations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirmations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
