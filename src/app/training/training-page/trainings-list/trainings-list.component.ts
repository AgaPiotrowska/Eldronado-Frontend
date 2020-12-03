import {Component, OnDestroy, OnInit} from '@angular/core';
import {OperatorsReadService} from '../../../operators/operators-read.service';
import {TranslationService} from '../../../shared/i18n/translation.service';
import {TrainingsReadService} from '../../services/trainings-read.service';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss']
})
export class TrainingsListComponent implements OnInit, OnDestroy {

  countText;

  constructor(public trainingsService: TrainingsReadService,
              private translationService: TranslationService) {
  }

  ngOnInit() {
    this.countText = (count: number) => this.getCountText(count);
  }

  ngOnDestroy() {
  }

  public getCountText(count: number) {
    return ('Znaleziono operatorów') + ': ' + count;
  }

  public fetchMoreProfilesCallback() {
    return () => this.trainingsService.fetchMore();
  }
}
