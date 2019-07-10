import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  //allows the child to emit the submitted form event to the parent
  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  //takes in the contents of the submitted form as an argument, and emits the details to the parent component to be added to the posts array
  submitPost(form) {
    this.submitted.emit({
      title: form.value.newPostTitle,
      thought: form.value.newPostThought
    });
    form.resetForm();
  }

  ngOnInit() {
  }
}
