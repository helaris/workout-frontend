import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from './workouts.service';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  workouts: Workout[];

  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit() {
    this.workouts = this.workoutsService.getAllWorkouts();
  }
}
