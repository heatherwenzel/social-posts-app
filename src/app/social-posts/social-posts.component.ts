import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../post-interface';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  show: boolean = false;

  posts: PostInterface[] = [
    {
      title: "Dog",
      thought: "Candy jelly beans jelly-o sugar plum fruitcake. Jelly-o soufflé powder donut biscuit lollipop. Carrot cake sesame snaps toffee carrot cake chocolate cake bear claw gummies tiramisu gummies. Chupa chups cake pie cheesecake pastry sesame snaps bonbon caramels."
    },
    {
      title: "Cat",
      thought: "Candy jelly beans jelly-o sugar plum fruitcake. Jelly-o soufflé powder donut biscuit lollipop. Carrot cake sesame snaps toffee carrot cake chocolate cake bear claw gummies tiramisu gummies. Chupa chups cake pie cheesecake pastry sesame snaps bonbon caramels."
    }
  ];

  constructor() { }

  onSubmit(post: PostInterface): void {    
    this.posts.unshift(post);
    this.show = false;
  }

  toggleForm(): void {
    this.show = !this.show;
  }

  removePost(index: number): void {
    this.posts.splice(index, 1);
  }

  ngOnInit() {
  }

}
