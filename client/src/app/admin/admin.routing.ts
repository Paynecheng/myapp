import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {LoginComponent} from './login/login.component';


const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: CategoryComponent
            },
            {
                path: 'category',
                component: CategoryComponent
            },
            {
                path: 'article',
                component: ArticleComponent
            },
            {
                path: 'editArticle/:id',
                component: EditArticleComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {  }
