import {Component, OnInit} from '@angular/core';
import { FrontEndService } from '../front-end.service';

@Component({
  selector: 'app-right-content',
  styleUrls: ['./right-content.component.css'],
  template: `<div class='right-content'>
    <div class="right-top">
      <h3>About me</h3>
      <img class='head-pic' src='/assets/images/th.jpeg' />
      <ul class="info">
        <li>网名： 河流</li>
        <li>职业： web开发工程师</li>
        <li>籍贯： 陕西西安</li>
        <li>邮箱： yuepayne@163.com</li>
      </ul>
    </div>
    <div class="search-box">
      <input />
      <button>搜索</button>
    </div>
    <div class="label-box">
      <h3>热门标签</h3>
      <ul>
        <li>linux</li>
        <li>mySql</li>
        <li>Javascript</li>
        <li>python</li>
        <li>vue</li>
        <li>angular</li>
        <li>数据可视化</li>
      </ul>
    </div>
    <div class="music-box">
        <h3>最新笔记</h3>
        <ul class="com-ul">
            <li *ngFor="let article of articles"><a routerLink="/front-end/detail/{{article.article_id}}">{{article.title}}</a></li>
        </ul>
    </div>
    <div class="organization">
      <h3>加入组织</h3>
      <img src="/assets/images/organization.png" />
      <p>QQ群：649519981</p>
    </div>
  </div>`
})

export class RightContentComponent implements OnInit {
  constructor(
    private service: FrontEndService
  ) {}

  public articles;

  ngOnInit() {
    this.service.getArticleFive()
    .subscribe((res) => {
      this.articles = res;
    });
  }
}
