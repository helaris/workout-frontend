import { Component, OnInit } from '@angular/core';
import { Exercise } from './exercise.model';
import { ExerciseService } from './exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exercises = this.exerciseService.getAllExercises();
  }
}
