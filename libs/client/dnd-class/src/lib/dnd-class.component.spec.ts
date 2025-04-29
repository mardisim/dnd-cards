import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DndClassComponent } from './dnd-class.component';

describe('DndClassComponent', () => {
  let component: DndClassComponent;
  let fixture: ComponentFixture<DndClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DndClassComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DndClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
