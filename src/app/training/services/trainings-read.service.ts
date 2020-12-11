import {Injectable} from '@angular/core';
import {ReadScrollingService, SelectType} from '../../shared/services/read-scrolling.service';
import {Profile, ProfileService} from '../../user/profile.service';
import {Viewport} from '../../jobs/model/viewport.model';
import {Training} from '../training.model';
import {from, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsReadService {

  public readService = new ReadScrollingService<Training>();

  constructor(private profileService: ProfileService) {
  }

  public initialize() {
    this.readService.initialize();
  }

  public fetchLocations(type: string, viewport: Viewport) {
    // this.readService.fetchLocations(this.profileService.getProfilesLocations(type, viewport));
    const trainings: Training[] = [
      {
        id: 1,
        latitude: 52,
        longitude: 21,
        getNumber(): number {
          return 1;
        }
      },
      {
        id: 2,
        latitude: 22,
        longitude: 53,
        getNumber(): number {
          return 1;
        }
      },
      {
        id: 3,
        latitude: 23,
        longitude: 54,
        getNumber(): number {
          return 1;
        }
      }
    ];
    const trainingDataRequestMock = of(trainings);
    this.readService.fetchLocations(trainingDataRequestMock);
  }

  public fetchMore() {
    const ids = this.readService.getNextIds();
    const trainings: Training[] = [
      {
        id: 1,
        price: 100,
        name: 'Szkolenie1',
        isOnline: true,
        companyName: 'Latamy',
        theoryHours: 29,
        practiceHours: 10,
        exam: true,
        latitude: 21,
        longitude: 52,
        www: 'www.latamy.pl',
        city: 'Warszawa',
        getNumber(): number {
          return 1;
        }
      },
      {
        id: 2,
        price: 150,
        name: 'Szkolenie2',
        isOnline: false,
        companyName: 'Dron me',
        practiceHours: 15,
        latitude: 22,
        longitude: 53,
        getNumber(): number {
          return 1;
        }
      },
      {
        id: 3,
        price: 300,
        name: 'Szkolenie3',
        latitude: 23,
        longitude: 54,
        getNumber(): number {
          return 1;
        }
      }
    ];
    const trainingDataRequestMock = of(trainings);
    // this.readService.fetchMore(this.profileService.getProfilesByIds(ids), ids);
    this.readService.fetchMore(trainingDataRequestMock, ids);
  }

  public selectOperator(profile: Profile, selectType: SelectType) {
    // this.readService.select(profile, selectType);
  }

  public unselectOperator() {
    // this.readService.select(null, SelectType.Clear);
  }
}
