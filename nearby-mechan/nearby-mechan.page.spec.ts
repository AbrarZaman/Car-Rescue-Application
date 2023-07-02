import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearbyMechanPage } from './nearby-mechan.page';

describe('NearbyMechanPage', () => {
  let component: NearbyMechanPage;
  let fixture: ComponentFixture<NearbyMechanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NearbyMechanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
