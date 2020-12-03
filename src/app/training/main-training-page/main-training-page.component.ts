import {Component, HostListener, OnInit} from '@angular/core';
import {CustomScrollService} from '../../main-search/custom-scroll.service';
import {Subject} from 'rxjs';
import {ResponsiveUtils} from '../../shared/services/responsive-utils';

@Component({
  selector: 'app-main-training-page',
  templateUrl: './main-training-page.component.html',
  styleUrls: ['./main-training-page.component.scss']
})
export class MainTrainingPageComponent implements OnInit {

  scrollSubject;

  constructor(private customScrollService: CustomScrollService) {
  }

  ngOnInit() {
    this.scrollSubject = new Subject<void>();
  }

  public onScroll(event: any) {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll2(event) {
    this.scrollSubject.next();
    this.customScrollService.scrollSubject.next();
  }

  public isMobile() {
    return ResponsiveUtils.isMobile();
  }

}
