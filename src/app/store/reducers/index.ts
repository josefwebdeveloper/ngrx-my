import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector, MetaReducer,
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {Comment, Post} from '../../models/models';
import {postReducer, PostState} from './post.reducer';
import {commentReducer, CommentState} from './comment.reducer';

export interface AppState {
  posts: PostState;
  comments: CommentState;
}


export const reducers: ActionReducerMap<AppState> = {
  posts: postReducer,
  comments: commentReducer
};
export const getPosts = (state: AppState) => state.posts.postsAll;
export const getComments = (state: AppState) => state.comments.commentsAll;
// console.log(this.getComments());

// export const postState = createFeatureSelector<AppState>()=>state.feature;
// export const getPosts = createSelector(postState, (state: PostsState) => {
//   console.log('posts', state.posts);
//   return state.posts;
// });

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
