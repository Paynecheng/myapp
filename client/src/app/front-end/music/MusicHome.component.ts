import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="music-page">
              <app-slide-nav></app-slide-nav>
              <div class="music-content"></div>
            </div>
            <app-play-control></app-play-control>
            `,
  styleUrls: ['./MusicHome.component.css']
})

export class MusicHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {  }
}
