import {Component, OnInit} from '@angular/core';
import {Introduction} from './model/introduction';
import {Speaker} from './model/speaker';
import {Schedules} from './model/schedules';
import {ScheduleItem} from './model/scheduleItem';
import {Image} from 'app/model/image';
import {WindowRefService} from './service/window-ref.service';

@Component({
  selector: 'kosta',
  templateUrl: 'kosta-nz.html'
})
export class KostaComponent implements OnInit {
  _window: WindowRefService;
  minHeight: number;
  title: String;
  subTitle: String;
  location: String;
  datetime: String;
  kostaIntro: Array<Introduction>;
  speakers: Array<Speaker>;
  schedules: Array<Schedules>;
  address: String;
  email: String;
  phoneNumber: String;
  galleryImages: Array<Image>;

  constructor(private winRef: WindowRefService) {
    this._window = winRef;
    this.minHeight = this._window.nativeWindow.innerHeight;

    this.kostaIntro = new Array<Introduction>();
    this.speakers = new Array<Speaker>();
    this.schedules = new Array<Schedules>();
    this.galleryImages = new Array<Image>();
  }

  ngOnInit() {
    this.loadBasicDetails();
    this.loadIntroduction();
    this.loadSpeakers();
    this.loadSchedules();
    this.loadContacts();
    this.loadImages();
  }

  private loadContacts() {
    this.address = 'Waikato University, Hillcrest, Hamilton 3216, New Zealand';
    this.email = 'kostanz@gmail.com';
    this.phoneNumber = '021 84 9191';
  }

  private loadImages() {
    this.galleryImages.push(new Image('gallery1-thumb.jpg', 'gallery1.jpg', 'Gallery Image 1'));
    this.galleryImages.push(new Image('gallery2-thumb.jpg', 'gallery2.jpg', 'Gallery Image 2'));
    this.galleryImages.push(new Image('gallery3-thumb.jpg', 'gallery3.jpg', 'Gallery Image 3'));
  }

  private loadBasicDetails() {
    this.subTitle = 'KOSTA';
    this.title = 'KOSTA';
    this.location = 'Hamilton, Auckland';
    this.datetime = '21.Nov ~ 24.Nov 2017';
  }

  private loadIntroduction() {
    this.kostaIntro.push(new Introduction('새 시대의 제사장과 소명', `
      종교개혁 5백년을 기념하는 해입니다.
      종교개혁의 중요한 교리적 기초가 만인제사장론 이었습니다. 
      사제만이 아닌 모든 신자가 제사장이라는 것이었습니다. 
      하나님과 인간 사이에 그리스도만이 유일한 중보자이시고 
      그리스도를 통해 우린 모두 직접적으로 신께 나아갈 수 있음은 
      종교제도에 구속된 당시의 신자들의 해방이었습니다.
      
      성도들은 직접 성경을 읽기 시작했으며 직접 하나님께 기도하기 시작했습니다.
      그리고 그들을 해방하신 구주를 전하기 시작했습니다. 
      그리스도의 아름다운 구원의 덕을 선전하기 시작했습니다. 
      더 나아가 모든 직업이 소명임을 발견하기 시작했습니다. 우리의 일터에 그리스도의 주권이 실현되기 시작했습니다.
      
      그러나 종교개혁의 숙제는 아직도 미완성입니다.
      교회 내 모든 평신도들이 자신의 미션을 발견할 수 있어야 하고 
      그들의 모든 직업의 장에서 하나님 나라가 임함을 소명으로 알 때 
      그리고 이 땅의 모든 교회들이 평신도들을 기꺼이 해방할 수 있을 때 
      우리는 교회와 일터에 임하는 하나님 나라의 영광을 보게 될 것입니다.
      이 밝아오는 새 시대의 주인공이 코스탄이기를 소망합니다.
      
      우리의 교회가 교회되어지고 일터가 또 하나의 교회가 되도록 
      학문과 직업이 연결되는 그 위대한 비전의 시간이기를 축복합니다.
      `,
      'assets/img/imac-371x412.png'));
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
