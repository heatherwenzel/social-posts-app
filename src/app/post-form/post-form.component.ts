import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>();

  constructor() { }

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
