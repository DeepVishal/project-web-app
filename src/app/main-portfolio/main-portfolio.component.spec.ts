import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortfolioComponent } from './main-portfolio.component';

describe('MainPortfolioComponent', () => {
  let component: MainPortfolioComponent;
  let fixture: ComponentFixture<MainPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPortfolioComponent]
    });
    fixture = TestBed.createComponent(MainPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
