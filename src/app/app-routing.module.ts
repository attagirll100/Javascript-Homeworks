import { NgModule } from "@angular/core";

import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostsComponent } from "./modules/posts/posts.component";
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
        path: '',
        component: DashboardComponent
    }, {
        path: 'posts',
        component: PostsComponent
    }]

}];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
 
