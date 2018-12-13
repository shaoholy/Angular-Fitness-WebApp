import { Action } from '@ngrx/store';

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Sop Loading';


export class StartLoading implements Action {
    readonly type = START_LOADING;
}


export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}

export type UIAcitons = StartLoading | StopLoading;
