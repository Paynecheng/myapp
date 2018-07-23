import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';

import { AdminRoutingModule } from './admin.routing';

import { AdminService } from './admin.service';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';


import { LoginComponent } from './login/login.component';


registerLocaleData(zh);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        CategoryComponent,
        ArticleComponent,
        EditArticleComponent,
        LoginComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        AdminService
    ],
})

export class AdminModule {  }
