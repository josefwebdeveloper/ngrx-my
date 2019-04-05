import {Action} from '@ngrx/store';
import {Post} from '../../models/models';
import {PostState} from '../reducers/post.reducer';
// import {PostsState} from '../reducers';

// export enum PostActionTypes {
//   postAction = '[Models] Action',
//
// }
export const SET_POSTS = '[Post] Set Posts';

export class SetPosts implements Action {
  readonly type = SET_POSTS;
  constructor(public payload: Post) {
  }
}


export type postAction = SetPosts;
