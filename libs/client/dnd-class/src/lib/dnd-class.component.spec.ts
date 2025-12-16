import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DnDClassComponent } from './dnd-class.component';

describe('DndClassComponent', () => {
  let component: DnDClassComponent;
  let fixture: ComponentFixture<DnDClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnDClassComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DnDClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
