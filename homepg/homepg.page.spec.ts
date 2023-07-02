import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepgPage } from './homepg.page';

describe('HomepgPage', () => {
  let component: HomepgPage;
  let fixture: ComponentFixture<HomepgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomepgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
