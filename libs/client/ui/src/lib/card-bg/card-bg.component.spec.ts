import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UICardBgComponent } from './card-bg.component';

describe('CardBgComponent', () => {
  let component: UICardBgComponent;
  let fixture: ComponentFixture<UICardBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UICardBgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UICardBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
