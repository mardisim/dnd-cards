import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDnDClassListComponent } from './dnd-class-list.component';

describe('DndClassComponent', () => {
  let component: FeatureDnDClassListComponent;
  let fixture: ComponentFixture<FeatureDnDClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDnDClassListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDnDClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
