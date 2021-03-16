import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercises.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {
  exercise;

  constructor(
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('exerciseId')) return;
      const exerciseId = paramMap.get('exerciseId');
      this.exerciseService.getExercise(exerciseId).subscribe((e) => {
        this.exercise = e;
      });
    });
  }

  // ionViewWillEnter() {
  //   this.exerciseService.fetchExercises().subscribe((exercise) => {
  //     this.exercises = exercise;
  //   });
}
