import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  //proprieties
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();

  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {


  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    }
    else {
      this.postService.savePost({ title, body } as Post).subscribe
        (post => {
          this.newPost.emit(post); //emit an event = give a new post at the place to push beacause it is separate component
        })
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(
      post => {
        console.log(post)
        this.isEdit = false;
        this.updatedPost.emit(post);
      });

  }

}
