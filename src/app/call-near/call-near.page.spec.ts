import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallNearPage } from './call-near.page';

describe('CallNearPage', () => {
  let component: CallNearPage;
  let fixture: ComponentFixture<CallNearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CallNearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
