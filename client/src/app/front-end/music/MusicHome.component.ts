import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="music-page">
              <app-slide-nav></app-slide-nav>
              <div class="music-content">
                <div class="music-bg"></div>
                <table>
                  <tr>
                    <th>歌曲列表</th>
                    <th>歌手</th>
                    <th>专辑</th>
                    <th>时长</th>
                    <th>操作</th>
                  </tr>
                  <tr>
                    <td class="song-name">
                      <i class="anticon anticon-pause-circle" *ngIf="flag" (click)="play()"></i>
                      <i class="anticon anticon-play-circle" *ngIf="!flag" (click)='play()'></i>在每一条伤心的应天大街上
                    </td>
                    <td class="songer">李志</td>
                    <td class="album">在每一条伤心的应天大街上</td>
                    <td class="duration">04:50</td>
                    <td class='download'><i class="anticon anticon-download"></i></td>
                  </tr>
                  <tr>
                    <td class="song-name"><i class="anticon anticon-play-circle"></i>向阳花</td>
                    <td class="songer">谢天笑</td>
                    <td class="album">X.T.X</td>
                    <td class="duration">04:59</td>
                    <td class='download'><i class="anticon anticon-download"></i></td>
                  </tr>
                  <tr>
                    <td class="song-name"><i class="anticon anticon-play-circle"></i>再次来临</td>
                    <td class="songer">谢天笑</td>
                    <td class="album">X.T.X</td>
                    <td class="duration">06:53</td>
                    <td class='download'><i class="anticon anticon-download"></i></td>
                  </tr>
                  <tr>
                    <td class="song-name"><i class="anticon anticon-play-circle"></i>永远是个秘密</td>
                    <td class="songer">谢天笑</td>
                    <td class="album">幻觉</td>
                    <td class="duration">04:20</td>
                    <td class='download'><i class="anticon anticon-download"></i></td>
                  </tr>
                </table>
              </div>
            </div>
            <app-play-control [flag]="flag"></app-play-control>
            `,
  styleUrls: ['./MusicHome.component.css']
})

export class MusicHomeComponent implements OnInit {
  constructor() {}

  public flag = false;

  ngOnInit() {  }

  play() {
    this.flag = !this.flag;
    // target.classList.remove('anticon-play-circle');
  }
}
