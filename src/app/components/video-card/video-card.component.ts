import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  description = '';

  constructor() { }

  ngOnInit() {
  }

}
