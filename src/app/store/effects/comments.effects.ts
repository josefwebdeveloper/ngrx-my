import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {ApiService} from '../../_services/api.service';


@Injectable()
export class CommentsEffects {
  @Effect()
  loadComments$ = this.actions$.pipe(
    ofType('[Comment] Load Comments'),
    mergeMap(() => this.api.getAll().pipe(
      map(data => ({type: '[Comment] Set Comments', payload: data.comments})),
    ))
  );

  constructor(private actions$: Actions, private api: ApiService) {
  }

}
