import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegPage } from './reg.page';

describe('HomePage', () => {
  let component: RegPage;
  let fixture: ComponentFixture<RegPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
