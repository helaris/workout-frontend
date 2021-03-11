import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: '1',
      title: 'Chest Press',
      description:
        'Lie face up on a flat bench, and grip a barbell with the hands slightly wider than shoulder-width. Press the feet into the ground and the hips into the bench while lifting the bar off the rack. Slowly lower the bar to the chest by allowing the elbows to bend out to the side. Stop when the elbows are just below the bench, and press feet into the floor to press the weight straight up to return to the starting position.',
      category: ['chest', 'shoulders'],
      bodyPart: 'Arms, Chest,',
      equipment: 'Barbell',
      imageUrl:
        'https://acewebcontent.azureedge.net/exercise-library/large/5-1.jpg',
    },
    {
      id: '2',
      title: 'Bulgarian Split Squat',
      description:
        'Begin in a plank position with the BOSU directly under the shoulders and the legs out behind the body, dome facing down. Jump the feet forward near the dome into a deep squat, and keep hold of the BOSU while lifting it straight over the head extending the arms. Bring the BOSU back to the floor and jump the legs out behind the body again.',
      category: ['legs', 'full-body'],
      bodyPart: 'Butt/Hips',
      equipment: 'Bench, Dumbbells',
      imageUrl:
        'https://acewebcontent.azureedge.net/exercise-library/large/52-1.jpg',
    },
  ];
  constructor() {}

  getAllExercises() {
    return [...this.exercises];
  }

  getExercise(workoutId: string) {
    return { ...this.exercises.find((workout) => workout.id === workoutId) };
  }
}
