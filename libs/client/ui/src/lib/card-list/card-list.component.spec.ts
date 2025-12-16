import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UICardListComponent } from './card-list.component';

describe('UICardListComponentComponent', () => {
  let component: UICardListComponent;
  let componentRef: ComponentRef<UICardListComponent>;
  let fixture: ComponentFixture<UICardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UICardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UICardListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('spells', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
