import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PohistvoComponent } from './pohistvo.component';

describe('PohistvoComponent', () => {
  let component: PohistvoComponent;
  let fixture: ComponentFixture<PohistvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PohistvoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PohistvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
