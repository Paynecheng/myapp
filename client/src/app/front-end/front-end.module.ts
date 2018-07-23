import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './commonComponent/header/header.component';
import { FormsModule } from '@angular/forms';
import { FrontEndComponent } from './front-end.component';
import { FrontEndRouting } from './front-end.routing';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './commonComponent/article-list/article-list.component';
import { FrontEndService } from './front-end.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AddEllipsis} from '../common';
import { FooterComponent } from './commonComponent/footer/footer.component';
import { ListComponent } from './list/list.component';
import { ArticleDetailComponent } from './commonComponent/article-detail/article-detail.component';
import { DetailComponent } from './detail/detail.component';
import { RightContentComponent } from './right-content/right-content.component';

import { MusicModule } from './music/music.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FrontEndRouting,
        NgZorroAntdModule,
        MusicModule
    ],
    declarations: [
        HeaderComponent,
        FrontEndComponent,
        HomeComponent,
        ArticleListComponent,
        AddEllipsis,
        FooterComponent,
        ListComponent,
        ArticleDetailComponent,
        DetailComponent,
        RightContentComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        FrontEndService
    ]
})

export class FrontEndModule {

}
