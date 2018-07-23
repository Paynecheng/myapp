import { Component } from '@angular/core';


@Component({
  selector: 'app-play-control',
  template: `<div class="control-box">
      <div class="song-img"><img src="../../../../assets/images/xietianxiao.jpg" /></div>
      <div class="song-info">
          <p class="song-name songp">潮起潮落是什么都不为</p>
          <p class="song-author songp">谢天笑</p>
      </div>
      <div class="btns">
          <span id="play-left"></span>
          <span id="play"></span>
          <span id="play-right"></span>
      </div>
      <div id="progressbar">
          <div class="pbar" id="ready"></div>
          <div class="pbar" id="current">
              <span id="big-circle">
                  <i></i>
              </span>
          </div>
      </div>
      <div class="time">
          <p><i>02:40</i> / <i>04:08</i></p>
      </div>
      <div id="right-control">
          <span id="voice"></span>
          <span id="play-type"></span>
          <span id="play-list">78</span>
      </div>
  </div>`,
  styleUrls: ['./play-control.component.css']
})
export class PlayControlComponent {
  constructor() {}
}
