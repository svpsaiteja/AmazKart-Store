import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuShimmerComponent } from './category-menu-shimmer.component';

describe('CategoryMenuShimmerComponent', () => {
  let component: CategoryMenuShimmerComponent;
  let fixture: ComponentFixture<CategoryMenuShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMenuShimmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMenuShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
