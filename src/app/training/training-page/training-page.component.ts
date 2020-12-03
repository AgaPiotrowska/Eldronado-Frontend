import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {OperatorFilters, OperatorsFilterService} from '../../operators/operators-filter.service';
import {OperatorsReadService} from '../../operators/operators-read.service';
import {MobileWidgetType} from '../../shared/services/read-scrolling.service';
import {takeUntil} from 'rxjs/operators';
import {Profile} from '../../user/profile.service';
import {TrainingsReadService} from '../services/trainings-read.service';
import {Training} from '../training.model';

@Component({
  selector: 'app-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss']
})
export class TrainingPageComponent implements OnInit, OnDestroy {
  error: string;
  fetchedInitialized = false;
  unSubscription = new Subject();

  // @ViewChild('mobileList', {static: false})
  // mobileList: ElementRef;

  @Input()
  scrollSubject: Subject<void>;

  mapVisible: boolean;


  constructor(private operatorsFilterService: OperatorsFilterService,
              public trainingsReadService: TrainingsReadService) {
    this.trainingsReadService.initialize();
  }

  ngOnInit() {
    this.trainingsReadService.readService.mobileWidgetType.next(MobileWidgetType.List);
    this.trainingsReadService.readService.mobileWidgetType.subscribe(
      (type => this.mapVisible = type === MobileWidgetType.Map)
    );
    this.trainingsReadService.readService.fetchedAnyAfterFilterChangedEvent
      .pipe(takeUntil(this.unSubscription))
      .subscribe(() => this.fetchedInitialized = true);

    this.trainingsReadService.readService.locations
      .pipe(takeUntil(this.unSubscription))
      .subscribe(
        (profiles: Training[]) => {
          if (profiles != null) {
            this.trainingsReadService.fetchMore();
          }
        }, error2 => {
          this.error = error2['error']['message'];
        }
      );

    this.operatorsFilterService.filtersChanged
      .pipe(takeUntil(this.unSubscription))
      .subscribe((filtersChanged: OperatorFilters) => {
          this.trainingsReadService.fetchLocations(filtersChanged.type, filtersChanged.viewport.viewport);
        }
      );
  }

  public ngOnDestroy() {
    this.unSubscription.next();
    this.unSubscription.complete();
  }

  public fetchMoreOperatorsCallback() {
    return () => this.trainingsReadService.fetchMore();
  }
}
