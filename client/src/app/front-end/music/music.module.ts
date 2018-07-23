import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicHomeComponent} from './MusicHome.component';
import {PlayControlComponent} from './play-control/play-control.component';
import {SlideNavComponent} from './slide-nav/SlideNav.component';




@NgModule({
  imports: [
    CommonModule,
    // MusicRouting
  ],
  declarations: [
    MusicHomeComponent,
    PlayControlComponent,
    SlideNavComponent
  ],
  providers: []
})

export class MusicModule { }
