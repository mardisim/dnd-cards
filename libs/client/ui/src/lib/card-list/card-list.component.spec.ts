import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UICardListComponent } from './card-list.component';

describe('UICardListComponentComponent', () => {
  let component: UICardListComponent;
  let fixture: ComponentFixture<UICardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UICardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UICardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
