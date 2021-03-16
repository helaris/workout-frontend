import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  // private exercises: Exercise[] = [];
  constructor(private http: HttpClient) {}

  // fetchExercises() {
  //   const exercises = [];
  //   return this.http.get<Exercise>('http://localhost:3000/api/exercises').pipe(
  //     map((resData) => {
  //       exercises.push(resData);
  //       console.log(typeof exercises);
  //       return exercises;
  //     })
  //   );
  // }

  fetchExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('http://localhost:3000/api/exercises');
  }

  // getAllExercises() {
  //   return [...this.exercises];
  // }
  getExercise(workoutId: string): Observable<Exercise[]> {
    return this.http
      .get<Exercise[]>(`http://localhost:3000/api/exercises/` + workoutId)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }
  // getExercise(workoutId: string) {
  //   return { ...this.exercises.find((workout) => workout.id === workoutId) };
  // }
}
