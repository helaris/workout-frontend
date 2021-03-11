import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private workouts: Workout[] = [
    {
      id: '1',
      title: 'Bench Press',
      description: 'Cool exercise',
      category: ['chest', 'shoulders'],
    },
    {
      id: '2',
      title: 'Squat',
      description: 'Another Cool exercise',
      category: ['legs', 'full-body'],
    },
  ];
  constructor() {}

  getAllWorkouts() {
    return [...this.workouts];
  }

  getWorkout(workoutId: string) {
    return { ...this.workouts.find((workout) => workout.id === workoutId) };
  }
}
