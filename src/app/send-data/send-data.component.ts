import { Subscription } from 'rxjs';
import { PostsService } from './posts.service';
import { Post } from './post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub: Subscription;

  constructor(private http: HttpClient,
    private postService: PostsService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.fetchData();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(
      postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchData();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  fetchData() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
        console.log('eror dtaa: ' + error.message);
      });
  }

  onErrorHandler(){
    this.error  = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
