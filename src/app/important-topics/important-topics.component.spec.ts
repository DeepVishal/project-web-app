import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTopicsComponent } from './important-topics.component';

describe('ImportantTopicsComponent', () => {
  let component: ImportantTopicsComponent;
  let fixture: ComponentFixture<ImportantTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantTopicsComponent]
    });
    fixture = TestBed.createComponent(ImportantTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
