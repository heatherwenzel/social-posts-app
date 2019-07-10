import { Component, OnInit } from '@angular/core';
//imports the interface for all posts
import { PostInterface } from '../post-interface';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  //shows or hides the new post form when clicked/hides the new post form when submitted
  show: boolean = true;

  //creates 2 new instances of the post interface
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

  //toggles whether the new post form is showing or hiding when clicked
  toggleForm(): void {
    this.show = !this.show;
  }
  
  //takes in the form submission event as an argument, adds the new post to the beginning of the posts array, and hides the new post form
  onSubmit(post: PostInterface): void {    
    this.posts.unshift(post);
    this.show = false;
  }

  //removes the post at the index clicked by splicing the posts array
  removePost(index: number): void {
    this.posts.splice(index, 1);
  }

  ngOnInit() {
  }

}
