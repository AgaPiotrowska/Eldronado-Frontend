import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingPageComponent } from './training-page/training-page.component';
import {SharedModule} from '../shared/shared.module';
import { MainTrainingPageComponent } from './main-training-page/main-training-page.component';
import {TrainingsRoutingModule} from './trainings-routing.module';
import { TrainingsListComponent } from './training-page/trainings-list/trainings-list.component';
import { TrainingListItemComponent } from './training-page/trainings-list/training-list-item/training-list-item.component';



@NgModule({
  declarations: [TrainingPageComponent, MainTrainingPageComponent, TrainingsListComponent, TrainingListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    TrainingsRoutingModule
  ]
})
export class TrainingModule { }
