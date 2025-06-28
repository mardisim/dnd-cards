import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIToastsContainerComponent } from './toast.component';

describe('UIToastsContainerComponent', () => {
  let component: UIToastsContainerComponent;
  let fixture: ComponentFixture<UIToastsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIToastsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UIToastsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
