import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: '1',
      title: 'Bench Press',
      description:
        'Lie face up on a barbell bench, then reach up and grip the bar with the hands directly in line with the shoulders and the elbows pointed towards the feet. Unrack the bar and bring it towards the chest by bending the elbows and keeping them close to the ribs. Push the feet into the floor, and press the hips into the bench as the bar is pushed away from the chest to return to the starting position.',
      category: ['chest', 'shoulders'],
      bodyPart: 'Arms, Chest,',
      equipment: 'Barbell',
    },
    {
      id: '2',
      title: 'Bulgarian Split Squat',
      description:
        'Begin in a plank position with the BOSU directly under the shoulders and the legs out behind the body, dome facing down. Jump the feet forward near the dome into a deep squat, and keep hold of the BOSU while lifting it straight over the head extending the arms. Bring the BOSU back to the floor and jump the legs out behind the body again.',
      category: ['legs', 'full-body'],
      bodyPart: 'Butt/Hips',
      equipment: 'Bench, Dumbbells',
    },
  ];
  constructor() {}

  getAllExercises() {
    return [...this.exercises];
  }

  getWorkout(workoutId: string) {
    return { ...this.exercises.find((workout) => workout.id === workoutId) };
  }
}
