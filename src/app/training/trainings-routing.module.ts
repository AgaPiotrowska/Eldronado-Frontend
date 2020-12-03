import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainSearchComponent} from '../main-search/main-search.component';
import {MainComponent} from '../main/main.component';
import {UserProfileComponent} from '../user/user-profile/user-profile.component';
import {MainTrainingPageComponent} from './main-training-page/main-training-page.component';

const appRoutes: Routes = [
  {path: 'trainings', pathMatch: 'full', component: MainTrainingPageComponent},
  // {
  //   path: 'operators', component: MainComponent, data: {full: false}, children: [
  //     {path: 'd/:user', component: UserProfileComponent},
  //   ]
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TrainingsRoutingModule {
}
