import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndComponent } from './front-end.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {MusicModule} from './music/music.module';
import {MusicHomeComponent} from './music/MusicHome.component';

const FrondEndRoutes: Routes = [
    {
        path: 'front-end',
        component: FrontEndComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'list/:id', component: ListComponent
            },
            {
                path: 'detail/:id', component: DetailComponent
            },
            {
                path: 'music', component: MusicHomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        MusicModule,
        RouterModule.forChild(FrondEndRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FrontEndRouting { }
