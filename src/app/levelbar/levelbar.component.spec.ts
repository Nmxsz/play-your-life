import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelbarComponent } from './levelbar.component';

describe('LevelbarComponent', () => {
  let component: LevelbarComponent;
  let fixture: ComponentFixture<LevelbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelbarComponent]
    });
    fixture = TestBed.createComponent(LevelbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
