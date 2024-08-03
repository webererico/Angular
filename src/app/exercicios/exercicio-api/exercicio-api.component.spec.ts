import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioAPIComponent } from './exercicio-api.component';

describe('ExercicioAPIComponent', () => {
  let component: ExercicioAPIComponent;
  let fixture: ComponentFixture<ExercicioAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
