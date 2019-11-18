import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-display',
  templateUrl: './lesson-display.component.html',
  styleUrls: ['./lesson-display.component.scss']
})
export class LessonDisplayComponent implements OnInit {
  lesson: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.lesson = this.route.snapshot.data.lesson;
  }

}
