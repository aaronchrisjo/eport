import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentsComponent } from './achievments.component';

describe('AchievmentsComponent', () => {
  let component: AchievmentsComponent;
  let fixture: ComponentFixture<AchievmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
