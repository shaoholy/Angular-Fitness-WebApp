import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UIService } from '../shared/ui.service';

import { Store } from '@ngrx/store';
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';
import * as fromTraining from './training.reducer';

@Injectable()
export class TrainingService {
    // exerciseChanged = new Subject<Exercise>();
    // exercisesChanged = new Subject<Exercise[]>(); //from database
    // finishedExercisesChanged = new Subject<Exercise[]>(); //from database
    // private availableExcecises: Exercise[] = [];
    // private runningExercises: Exercise;
    // private finishedExercises: Exercise[] = [];
    private fbSubs: Subscription[] = [];

    constructor(
        private db: AngularFirestore,
        private uiService: UIService,
        private store: Store<fromTraining.State>
      ) {}

    getAvailableExercises() {
        this.fbSubs.push(this.db
        .collection('availableExercises')
        .snapshotChanges()
        .pipe(map(docArray => {
        // throw(new Error());
            return docArray.map(doc => {
                return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data()
                } as Exercise;
            });
        })).
        subscribe(
            (exercises: Exercise[]) => {
              this.store.dispatch(new UI.StopLoading());
              this.store.dispatch(new Training.SetAvailableTrainings(exercises));
            },
            error => {
              this.store.dispatch(new UI.StopLoading());
              this.uiService.showSnackBar(
                'Fetching Exercises failed, please try again later',
                null,
                3000
              );
            }
          )
        );
    }

    startExercise(selectedID: string) {
        this.store.dispatch(new Training.StartTraining(selectedID));
    }

    completeExercise() {
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
            this.addDataToDatabase({
                ...ex,
                date: new Date(),
                state: 'completed'
            });
            this.store.dispatch(new Training.StopTraining());
        });
        // this.addDataToDatabase({
        //     ...this.runningExercises,
        //     date: new Date(),
        //     state: 'completed'
        // });
        // this.store.dispatch(new Training.StopTraining());
    }

    cancelExercise(progress: number) {
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
            // console.log(ex);
            this.addDataToDatabase({
                ...ex,
                date: new Date(),
                state: 'cancelled',
                duration: ex.duration * (progress / 100),
                calories: ex.calories * (progress / 100)
            });
            this.store.dispatch(new Training.StopTraining());
        });
    }

    getCompletedOrCancelledExercise() {
        this.fbSubs.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
                // this.finishedExercises = exercises;
                // this.finishedExercisesChanged.next(exercises);
                this.store.dispatch(new Training.SetFinishedTrainings(exercises));
            }
        ));
    }

    private addDataToDatabase(exercise: Exercise) {
        // save exercises to database
        this.db.collection('finishedExercises').add(exercise);
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => sub.unsubscribe());
    }
}
