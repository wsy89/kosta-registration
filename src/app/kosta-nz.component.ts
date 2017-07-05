import {Component, OnInit} from '@angular/core';
import {Introduction} from './model/introduction';
import {Speaker} from './model/speaker';
import {Schedules} from './model/schedules';
import {ScheduleItem} from './model/scheduleItem';

@Component({
  selector: 'kosta',
  templateUrl: 'kosta-nz.html'
})
export class KostaComponent implements OnInit {
  title: String;
  subTitle: String;
  location: String;
  datetime: String;
  kostaIntro: Array<Introduction> = new Array<Introduction>();
  speakers: Array<Speaker> = new Array<Speaker>();
  schedules: Array<Schedules> = new Array<Schedules>();
  address: String;
  email: String;
  phoneNumber: String;

  ngOnInit() {
    this.loadBasicDetails();
    this.loadIntroduction();
    this.loadSpeakers();
    this.loadSchedules();
    this.loadContacts();
  }

  private loadContacts() {
    this.address = 'Waikato University, Hillcrest, Hamilton 3216, New Zealand';
    this.email = 'kostanz@gmail.com';
    this.phoneNumber = '021 84 9191';

  }

  private loadBasicDetails() {
    this.subTitle = 'KOSTA';
    this.title = 'KOSTA';
    this.location = 'Hamilton, Auckland';
    this.datetime = '21.Nov ~ 24.Nov 2017';
  }

  private loadIntroduction() {
    this.kostaIntro.push(new Introduction('title', 'text', 'assets/img/imac-371x412.png'));
    this.kostaIntro.push(new Introduction('title2', 'text2', 'assets/img/imac-371x412.png'));
  }

  private loadSpeakers() {
    this.speakers.push(new Speaker('../assets/img/speakers/speaker1.jpg', 'name', 'title', 'details'));
    this.speakers.push(new Speaker('../assets/img/speakers/speaker1.jpg', 'name2', 'title3', 'details4'));
    this.speakers.push(new Speaker('../assets/img/speakers/speaker1.jpg', 'name2', 'title3', 'details4'));
  }

  private loadSchedules() {
    let firstDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    firstDay.push(new ScheduleItem('1:30 PM', '3:00 PM', '등록 / 숙소 배정', '', '', ''));
    firstDay.push(new ScheduleItem('3:00 PM', '4:15 PM', '개회예배', '양승봉', '', ''));
    firstDay.push(new ScheduleItem('4:15 PM', '5:00 PM', '오리엔테이션', '', '', ''));
    firstDay.push(new ScheduleItem('5:00 PM', '5:30 PM', '조별 모임', '', '', ''));
    firstDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    firstDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '김대로', '', ''));
    firstDay.push(new ScheduleItem('9:30 PM', '9:35 PM', '이동', '', '', ''));
    firstDay.push(new ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', ''));
    firstDay.push(new ScheduleItem('11:00 PM', '11:15 PM', '취침', '', '', ''));

    let secondDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    secondDay.push(new ScheduleItem('6:30 AM', '7:00 AM', '기상 및 세면', '', '', ''));
    secondDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', ''));
    secondDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('9:00 AM', '9:15 AM', '이동', '', '', ''));
    secondDay.push(new ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', ''));
    secondDay.push(new ScheduleItem('10:55 AM', '11:20 AM', 'Tea Time', '', '', ''));
    secondDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '오전특강', '탁지원', '', ''));
    secondDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('1:30 PM', '1:50 PM', '이동', '', '', ''));
    secondDay.push(new ScheduleItem('1:50 PM', '3:20 PM', '세미나1', '', '', ''));
    secondDay.push(new ScheduleItem('3:20 PM', '3:40 PM', '이동', '', '', ''));
    secondDay.push(new ScheduleItem('3:40 PM', '5:10 PM', '세미나2', '', '', ''));
    secondDay.push(new ScheduleItem('5:10 PM', '5:30 PM', '이동', '', '', ''));

    secondDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '송병주', '', ''));
    secondDay.push(new ScheduleItem('9:30 PM', '9:35 PM', '이동', '', '', ''));
    secondDay.push(new ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', ''));
    secondDay.push(new ScheduleItem('11:00 PM', '11:15 PM', '취침', '', '', ''));

    let thirdDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    thirdDay.push(new ScheduleItem('6:30 AM', '7:00 AM', '기상 및 세면', '', '', ''));
    thirdDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', ''));
    thirdDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('9:00 AM', '9:15 AM', '이동', '', '', ''));
    thirdDay.push(new ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', ''));
    thirdDay.push(new ScheduleItem('10:55 AM', '11:20 AM', 'Tea Time', '', '', ''));
    thirdDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '이영길', '', ''));
    thirdDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('1:30 PM', '1:50 PM', '이동', '', '', ''));
    thirdDay.push(new ScheduleItem('1:50 PM', '3:20 PM', '세미나3', '', '', ''));
    thirdDay.push(new ScheduleItem('3:20 PM', '3:40 PM', '이동', '', '', ''));
    thirdDay.push(new ScheduleItem('3:40 PM', '5:10 PM', '세미나4 / 교역자 세미나', '', '', ''));
    thirdDay.push(new ScheduleItem('5:10 PM', '5:30 PM', '이동', '', '', ''));

    thirdDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '송병주', '', ''));
    thirdDay.push(new ScheduleItem('9:30 PM', '9:35 PM', '이동', '', '', ''));
    thirdDay.push(new ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', ''));
    thirdDay.push(new ScheduleItem('11:00 PM', '11:15 PM', '취침', '', '', ''));

    let lastDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    lastDay.push(new ScheduleItem('6:30 AM', '7:00 AM', '기상 및 세면', '', '', ''));
    lastDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', ''));
    lastDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사 / 숙소 Checkout', '', '', 'fa-cutlery'));
    lastDay.push(new ScheduleItem('9:00 AM', '9:15 AM', '이동', '', '', ''));
    lastDay.push(new ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', ''));
    lastDay.push(new ScheduleItem('10:55 AM', '11:20 AM', 'Tea Time', '', '', ''));
    lastDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '', '', ''));
    lastDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    lastDay.push(new ScheduleItem('1:30 PM', '1:50 PM', '이동', '', '', ''));
    lastDay.push(new ScheduleItem('1:50 PM', '3:15 PM', '폐회 예배', '송병주', '', ''));
    lastDay.push(new ScheduleItem('3:15 PM', '4:15 PM', '악수례 / 단체 사진촬영', '', '', ''));

    let tuesday: Schedules = new Schedules('TUESDAY, NOV.21', firstDay);
    let wednesday: Schedules = new Schedules('WEDNESDAY, NOV.22', secondDay);
    let thursday: Schedules = new Schedules('THURSDAY, NOV.23', thirdDay);
    let friday: Schedules = new Schedules('FRIDAY, NOV.24', lastDay);
    this.schedules.push(tuesday);
    this.schedules.push(wednesday);
    this.schedules.push(thursday);
    this.schedules.push(friday);
  }
}
