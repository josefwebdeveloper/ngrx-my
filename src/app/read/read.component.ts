import {Component, OnInit} from '@angular/core';
import {AppState} from '../store/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromPosts from '../store/reducers';
import {Post, Comment} from '../models/models';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  postsLocal;
  // posts$: Observable<PostsState> = this.store.select(state => {
  //   console.log(state.posts);
  //   return {...state.posts};
  // });
  posts$: Observable<Post[]>;
  comments$: Observable<Comment[]> = this.store.select(state => state.comments.commentsAll);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.posts$ = this.store.select(fromPosts.getPosts);
    this.store.dispatch({type: '[Comment] Load Comments'});
    // this.comments$ = this.store.select(fromPosts.getComments);
    // this.store.select(fromPosts.getPosts).subscribe((posts: Models[]) => {
    //   this.postsLocal = posts;
    //   console.log('posts', this.postsLocal);
    // });

  }

}
