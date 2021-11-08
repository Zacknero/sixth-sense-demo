import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable} from 'rxjs';
import {Post} from '../shared/models/post';
import {Comment} from '../shared/models/comment';
import {PostDetail} from '../shared/models/post-detail';

@Injectable({
  providedIn: 'root'
})

/* HttpService service for call any REST API */
export class HttpService {
  
  constructor(private http: HttpClient) {
  }
  
  /* loadPosts for load all posts of blog */
  loadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  
  /* loadPostById load Post selected  */
  loadPostDetail(idPost: number) {
    let postDetail: any;
    
    return combineLatest([this.loadPostById(idPost), this.loadCommentsById(idPost)]);
    
    
    /*this.loadPostById(idPost).pipe(
      mergeMap(post => {
        postDetail = post;
        return this.loadCommentsById(idPost)
      })
    );*/
  }
  
  /* loadPostById load Post selected  */
  loadPostById(idPost: number): Observable<PostDetail> {
    return this.http.get<PostDetail>(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
  }
  
  /* loadCommentsById load comments for post selected */
  loadCommentsById(idPost: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
  }
  
}
