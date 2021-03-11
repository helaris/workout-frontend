import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'workouts',
        children: [
          {
            path: '',
            loadChildren: '../workouts/workouts.module#WorkoutsPageModule',
          },
          {
            path: ':workoutId',
            loadChildren:
              '../workouts/workout-detail/workout-detail.module#WorkoutDetailPageModule',
          },
        ],
      },
      {
        path: 'exercises',
        children: [
          {
            path: '',
            loadChildren: '../exercises/exercises.module#ExercisesPageModule',
          },
          {
            path: ':exerciseId',
            loadChildren:
              '../exercises/exercise-detail/exercise-detail.module#ExerciseDetailPageModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/home/tabs/workouts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tabs/workouts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
