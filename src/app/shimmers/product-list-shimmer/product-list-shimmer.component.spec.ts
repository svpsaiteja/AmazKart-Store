import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListShimmerComponent } from './product-list-shimmer.component';

describe('ProductListShimmerComponent', () => {
  let component: ProductListShimmerComponent;
  let fixture: ComponentFixture<ProductListShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListShimmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
