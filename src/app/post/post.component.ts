import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostInterface } from '../post-interface';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: PostInterface;
  @Output() onRemovePost = new EventEmitter<any>();

  constructor() { }

  removePost(index: number): void {
    this.onRemovePost.emit(index);
  }

  ngOnInit() {
  }

}
