import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMatchTs } from './edit-match';

describe('EditMatchTs', () => {
  let component: EditMatchTs;
  let fixture: ComponentFixture<EditMatchTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMatchTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMatchTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
