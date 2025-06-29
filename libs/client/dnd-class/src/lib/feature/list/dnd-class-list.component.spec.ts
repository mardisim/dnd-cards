import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDnDClassLisComponent } from './dnd-class-list.component';

describe('DndClassComponent', () => {
  let component: FeatureDnDClassLisComponent;
  let fixture: ComponentFixture<FeatureDnDClassLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDnDClassLisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDnDClassLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
