import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListServPage } from './list-serv.page';

describe('ListServPage', () => {
  let component: ListServPage;
  let fixture: ComponentFixture<ListServPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListServPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
