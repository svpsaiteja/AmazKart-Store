import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityUpdateComponent } from './quantity-update.component';

describe('QuantityUpdateComponent', () => {
  let component: QuantityUpdateComponent;
  let fixture: ComponentFixture<QuantityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
