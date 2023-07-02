import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearAdnocPage } from './near-adnoc.page';

describe('NearAdnocPage', () => {
  let component: NearAdnocPage;
  let fixture: ComponentFixture<NearAdnocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NearAdnocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
