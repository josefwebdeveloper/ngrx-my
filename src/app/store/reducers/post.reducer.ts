import {postAction, SET_POSTS} from '../actions/post.actions';
import {Comment, Post} from '../../models/models';
import {CommentState} from './comment.reducer';
import {commentActions, SET_COMMENTS} from '../actions/comment.action';


// const initialState: Post = {
//   id: '',
//   title: ''
// };
// export function postReducer(state: Post[] = [initialState], action: postAction): Post[] {
//   switch (action.type) {
//     case SET_POSTS:
//       return [...state, action.payload];
//     default:
//       return [...state];
//   }
// }
export interface PostState {
  postsAll: Post[];
}

const initialState: PostState = {
  postsAll: []
};

export function postReducer(state: PostState = initialState, action: postAction) {
  switch (action.type) {
    case SET_POSTS:
      return {...state, postsAll: [...state.postsAll, action.payload]};
    default:
      return state;
  }
}
