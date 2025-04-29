import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICardComponent } from './card.component';

describe('CardComponent', () => {
  let component: UICardComponent;
  let fixture: ComponentFixture<UICardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UICardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UICardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
