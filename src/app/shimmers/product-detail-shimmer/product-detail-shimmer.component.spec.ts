import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailShimmerComponent } from './product-detail-shimmer.component';

describe('ProductDetailShimmerComponent', () => {
  let component: ProductDetailShimmerComponent;
  let fixture: ComponentFixture<ProductDetailShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailShimmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
