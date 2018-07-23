import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFoundComponent';
// import { AdminComponent } from './admin/admin.component';
// import { FrontEndComponent } from './front-end/front-end.component';

import { AdminModule } from './admin/admin.module';
import { FrontEndModule } from './front-end/front-end.module';

const routes: Routes = [
    { path: '', redirectTo: '/front-end', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    AdminModule,
    FrontEndModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
