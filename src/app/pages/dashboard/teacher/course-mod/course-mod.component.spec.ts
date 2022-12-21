import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModComponent } from './course-mod.component';

describe('CourseModComponent', () => {
  let component: CourseModComponent;
  let fixture: ComponentFixture<CourseModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
