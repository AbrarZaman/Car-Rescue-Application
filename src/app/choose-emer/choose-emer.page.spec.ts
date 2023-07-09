import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseEmerPage } from './choose-emer.page';

describe('ChooseEmerPage', () => {
  let component: ChooseEmerPage;
  let fixture: ComponentFixture<ChooseEmerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseEmerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
