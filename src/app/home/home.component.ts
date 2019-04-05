import {Component, OnInit} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Observable} from 'rxjs';
import {Comment, Post} from '../models/models';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SetPosts} from '../store/actions/post.actions';
import {SetComments} from '../store/actions/comment.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ts-ignore
  // allData: All[];
  comments$: Observable<Comment[]>;
  posts$: Observable<Post[]>;
  PostForm: FormGroup;
  submitted = false;

  constructor(private api: ApiService, private store: Store<AppState>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.PostForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
    });
    this.getAll();
  }

  getAll(): void {
    const alldata$ = this.api.getAll();
    this.comments$ = alldata$.pipe(
      map(data => {
        // this.store.dispatch(new SetComments(data.comments));
        return data.comments;
      })
    );
    this.posts$ = alldata$.pipe(
      map(data => {
        console.log('posts', data.posts);
        return data.posts;
      })
    );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.PostForm.invalid) {
      return;
    }
    console.log(this.PostForm.value);
    this.postPost();
  }

  postPost() {
    this.store.dispatch(new SetPosts(this.PostForm.value));
  }
}
