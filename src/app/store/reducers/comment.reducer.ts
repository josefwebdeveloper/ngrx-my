import {Comment, Post} from '../../models/models';
import {commentActions, LOAD_COMMENTS, SET_COMMENTS} from '../actions/comment.action';

export interface CommentState {
  commentsAll: Comment[];
}

const initialState: CommentState = {
  commentsAll: []
};

export function commentReducer(state: CommentState = initialState, action: commentActions) {
  switch (action.type) {
    case SET_COMMENTS:
      return {...state, commentsAll: action.payload};
    default:
      return state;
  }
}
