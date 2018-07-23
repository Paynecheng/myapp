import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-nav',
  template: `<div class="slide-nav">
      <div class="music-logo"></div>
      <h3>我的音乐</h3>
      <ul>
          <li>我最喜欢</li>
          <li>摇滚</li>
          <li>民谣</li>
          <li>古风</li>
          <li>至此流年各天涯</li>
          <li>被狗骑着上战场</li>
          <li>老谢的歌单</li>
          <li>纯音乐</li>
      </ul>
  </div>`,
  styleUrls: ['./SlideNav.component.css']
})

export class SlideNavComponent {
  constructor() {}
}
