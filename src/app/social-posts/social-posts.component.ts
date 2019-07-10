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
  show: boolean = false;

  //creates 2 new instances of the post interface
  posts: PostInterface[] = [
    {
      title: "Fidget spinners",
      thought: "It makes sense that the target audience for fidget spinners lost interest in them so quickly"
    },
    {
      title: "Almost died",
      thought: "It would be cool if after you died, you could see the top 5 times you almost died"
    },
    {
      title: "Royal spiders",
      thought: "The spiders that live in Buckingham Palace now are probably the descendants of the spiders that lived there during Victorian times"
    },
    {
      title: "Helium surprise",
      thought: "The first person who inhaled helium must have been so relieved when the effects wore off"
    },
    {
      title: "Nice catch",
      thought: "Posting a newborn’s weight and length makes childbirth rather too similar to fishing"
    },
    {
      title: "Sunny what?",
      thought: "Sunny D tastes like someone made a bet that they could make orange juice without oranges"
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
