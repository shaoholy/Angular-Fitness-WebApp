import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training.reducer';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  // @Output() trainingStart = new EventEmitter<Exercise>();//new EventEmitter<void>();
  exercises$: Observable<Exercise[]>;
  //  exerciseSubscription: Subscription;

  constructor(private trainingSerivce: TrainingService,
    private db: AngularFirestore,
    private store: Store<fromTraining.State>) { }

  ngOnInit() {
    this.exercises$ = this.store.select(fromTraining.getAvailableTrainings);
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingSerivce.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    console.log('start!');
    this.trainingSerivce.startExercise(form.value.exercise);
  }
}
