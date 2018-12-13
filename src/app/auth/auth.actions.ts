import { Action } from '@ngrx/store';

export const SET_AUTHENTICATED = '[UI] Set Authenticated';
export const SET_UNAUTHENTICATED = '[UI] Set Unauthenticated';


export class SetAuthenticated implements Action {
    readonly type = SET_AUTHENTICATED;
}


export class SetUnauthenticated implements Action {
    readonly type = SET_UNAUTHENTICATED;
}

export type AuthAcitons = SetAuthenticated | SetUnauthenticated;
