import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPlaceholderComponent } from './empty-placeholder.component';

describe('EmptyPlaceholderComponent', () => {
  let component: EmptyPlaceholderComponent;
  let fixture: ComponentFixture<EmptyPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
