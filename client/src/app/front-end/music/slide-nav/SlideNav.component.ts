import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-nav',
  template: `<div class="slide-nav">
      <div class="music-logo"></div>
      <h3>我的音乐</h3>
      <ul class="my-love">
          <li><i class="anticon anticon-right"></i><a routerLink="">我最喜欢</a></li>
          <li><i class="anticon anticon-right"></i><a routerLink="">摇滚</a></li>
          <li><i class="anticon anticon-right"></i><a routerLink="">民谣</a></li>
          <li><i class="anticon anticon-right"></i><a routerLink="">古风</a></li>
          <li><i class="anticon anticon-right"></i><a routerLink="">纯音乐</a></li>
          <li><i class="anticon anticon-right"></i><a routerLink="">至此流年各天涯</a></li>
          <li><i class="anticon anticon-right"></i><a routerLink="">被狗骑着上战场</a></li>
      </ul>
  </div>`,
  styleUrls: ['./SlideNav.component.css']
})

export class SlideNavComponent {
  constructor() {}
}
