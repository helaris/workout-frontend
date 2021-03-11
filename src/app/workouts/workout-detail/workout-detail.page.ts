import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../workouts.service';
import { Workout } from '../workout.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.page.html',
  styleUrls: ['./workout-detail.page.scss'],
})
export class WorkoutDetailPage implements OnInit {
  loadedWorkout: Workout;

  constructor(
    private activatedRoute: ActivatedRoute,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('workoutId')) return;
      const workoutId = paramMap.get('workoutId');
      this.loadedWorkout = this.workoutsService.getWorkout(workoutId);
    });
  }
}
