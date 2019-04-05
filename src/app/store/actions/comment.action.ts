import {Action} from '@ngrx/store';
import {Comment} from '../../models/models';


export const LOAD_COMMENTS = '[Comment] Load Comments';
export const SET_COMMENTS = '[Comment] Set Comments';

export class LoadComments implements Action {
  readonly type = LOAD_COMMENTS;
  }

export class SetComments implements Action {
  readonly type = SET_COMMENTS;
  constructor(public payload: Comment[]) {
  }
}


export type commentActions = LoadComments | SetComments;
