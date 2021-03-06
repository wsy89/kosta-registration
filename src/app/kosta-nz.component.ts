import {Component, HostListener, OnInit} from '@angular/core';
import {Introduction, Links} from './model/introduction';
import {Speaker} from './model/speaker';
import {Schedules} from './model/schedules';
import {ScheduleItem} from './model/scheduleItem';
import {Image} from 'app/model/image';
import {WindowRefService} from './service/window-ref.service';
import {Information, StyledNote} from './model/information';
import {Price} from './model/Price';

@Component({
  selector: 'kosta',
  templateUrl: 'kosta-nz.html'
})
export class KostaComponent implements OnInit {
  currentSection: String;
  title: String;
  subTitle: String;
  location: String;
  datetime: String;
  kostaIntro: Array<Introduction>;
  speakers: Array<Speaker>;
  schedules: Array<Schedules>;
  conferenceInfo: Information;
  address: String;
  email: String;
  galleryImages: Array<Image>;
  registrationUrl: String;
  howToOfflineLink: String;
  mapUrl: String;
  videoUrl: String;

  constructor() {
    this.kostaIntro = new Array<Introduction>();
    this.speakers = new Array<Speaker>();
    this.schedules = new Array<Schedules>();
    this.conferenceInfo = new Information();
    this.galleryImages = new Array<Image>();
    this.registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJn3KmKBFt3F_f4oqbU6HNowetOlVF9sbzdR4RBiCG8alo1w/viewform?usp=sf_link";
    this.howToOfflineLink = "REGOFORM_17_kosta.pdf";
    this.mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12612.542539237968!2d175.318458!3d-37.786861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d7f4d33e4d197ad!2sUniversity+of+Waikato!5e0!3m2!1sen!2snz!4v1414189741160";
    this.videoUrl = "https://www.youtube.com/embed/QweTEjN6QmM"
  }

  ngOnInit() {
    this.loadBasicDetails();
    this.loadIntroduction();
    this.loadSpeakers();
    this.loadSchedules();
    this.loadConferenceInformation();
    this.loadContacts();
    this.loadImages();
  }

  enter(name: String) {
    this.currentSection = name;
  }

  private loadContacts() {
    this.address = 'Waikato University, Hillcrest, Hamilton 3216, New Zealand';
    this.email = 'kostanz@gmail.com';
  }

  private loadImages() {
    this.galleryImages.push(new Image('kostanz1.jpg', 'gallery1.jpg', ''));
    this.galleryImages.push(new Image('kostanz2.jpg', 'gallery2.jpg', ''));
    this.galleryImages.push(new Image('kostanz3.jpg', 'gallery3.jpg', ''));
    this.galleryImages.push(new Image('kostanz4.jpg', 'gallery3.jpg', ''));
    this.galleryImages.push(new Image('kostanz5.jpg', 'gallery1.jpg', ''));
    this.galleryImages.push(new Image('kostanz6.jpg', 'gallery2.jpg', ''));
    this.galleryImages.push(new Image('kostanz7.jpg', 'gallery3.jpg', ''));
    this.galleryImages.push(new Image('kostanz8.jpg', 'gallery3.jpg', ''));
  }

  private loadBasicDetails() {
    this.subTitle = '';
    this.title = '';
    this.location = 'University of Waikato';
    this.datetime = '21-24.Nov.2017';
  }

  private loadIntroduction() {
    this.kostaIntro.push(new Introduction('fa-book', 'Theme', '새 시대의 제사장과 소명', `
      종교개혁 500년을 기념하는 해입니다.
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
      `, 'assets/img/theme.png', false, null));
    this.kostaIntro.push(new Introduction('fa-video-camera', 'Video', '', '', '', true, null));

    let linkMap= new Array<Links>();
    linkMap.push(new Links('2017 KOSTA 포스터', 'assets/img/etc/2017_Poster.png'));
    linkMap.push(new Links('2017 KOSTA 주제문', 'assets/pdf/2017_theme.pdf'));
    this.kostaIntro.push(new Introduction('fa-file-text-o', 'Promotion package', 'KOSTA를 함께 홍보해주세요', '', 'assets/img/theme.png', false, linkMap));
  }

  private loadSpeakers() {
    this.speakers.push(new Speaker('assets/img/speakers/K_kimdohyun.jpg', '김도현 강사', '',
      new Array<String>('Colorado Christian University 교수',
      '장로교 볼더 한인 교회 담임목사',
      '전) Sterling College 종교학 과장',
      '저서: ‘나의 사랑하는 책 로마서’, ‘빌립보서 어떻게 읽을것인가’')
      ));
    this.speakers.push(new Speaker('assets/img/speakers/K_kimchanggeun.jpeg', '김창근 강사', '',
      new Array<String>('무학교회 담임 목사',
      '서강대학교 전자공학 전공',
      '장로회 신학대학 대학원',
      'San Francisco Theological Seminary (DMin)')
      ));
    this.speakers.push(new Speaker('assets/img/speakers/K_kimhaeyoung.jpeg', '김해영 강사', '',
      new Array<String>('밀알복지재단 희망사업본부장')));
    this.speakers.push(new Speaker('assets/img/speakers/K_parkdonghee.jpeg', '박동희 강사', '',
      new Array<String>('GMP 선교사',
      'Hosung Inc. / R&D Director',
      '미주 기독교 방송 큐티 사역담당',
      'Korea & New York 두란노서원 실행이사',
      'New York Scripture Union / Q.T 사역강사')
      ));
    this.speakers.push(new Speaker('assets/img/speakers/K_suhjaeseok.jpeg', '서재석 강사', '',
      new Array<String>('Young 2080 대표',
      'QTzine (월간) 편집인',
      '전) IVP와 복음과 상황 (월간)의 편집장',
      '역서: ‘첫 아침을 주님과 함께’ (This Morning with God), ‘문서운동 핸드북’')
      ));
    this.speakers.push(new Speaker('assets/img/speakers/K_yooneunsung.jpeg', '윤은성 강사', '',
      new Array<String>('심플교회 담임목사',
      '어깨동무사역원 한국 대표',
      '어깨동무학교 교장')
      ));
    this.speakers.push(new Speaker('assets/img/speakers/K_jeongyungsook.jpeg', '정경숙 강사', '',
      new Array<String>('무학교회 사모')));
    this.speakers.push(new Speaker('assets/img/speakers/K_chaedonguk.jpg', '채종욱 강사', '',
      new Array<String>('GMP 선교사, BAM 선교사',
      '미국 KOSTA 공동대표',
      'GBM Korea/ GBM Asia (인도) 그룹 회장',
      '미주 GMP 선교회 이사장',
      '빈손채움재단의 이사장')
      ));
  }

  private loadSchedules() {
    let firstDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    firstDay.push(new ScheduleItem('1:30 PM', '3:00 PM', '등록 / 숙소 배정', '', '', 'fa-calendar'));
    firstDay.push(new ScheduleItem('3:00 PM', '4:15 PM', '개회예배', '', '', 'fa-institution'));
    firstDay.push(new ScheduleItem('4:15 PM', '5:00 PM', '오리엔테이션', '', '', 'fa-bullhorn'));
    firstDay.push(new ScheduleItem('5:00 PM', '5:30 PM', '조별 모임', '', '', 'fa-users'));
    firstDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    firstDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '', '', 'fa-institution'));
    firstDay.push(new ScheduleItem('9:35 PM', '11:00 PM', '조별 나눔', '', '', 'fa-users'));

    let secondDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    secondDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', 'fa-users'));
    secondDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('9:10 AM', '10:50 AM', '성경 강해', '', '', 'fa-institution'));
    secondDay.push(new ScheduleItem('10:50 AM', '11:00 AM', '책소개', '', '', 'fa-thumbs-up'));
    secondDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '', '', 'fa-institution'));
    secondDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('2:00 PM', '3:30 PM', '세미나1', '', '', 'fa-edit'));
    secondDay.push(new ScheduleItem('3:50 PM', '5:20 PM', '세미나2', '', '', 'fa-edit'));

    secondDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '', '', 'fa-institution'));
    secondDay.push(new ScheduleItem('9:35 PM', '11:00 PM', '조별 나눔', '', '', 'fa-users'));

    let thirdDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    thirdDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', 'fa-users'));
    thirdDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('9:10 AM', '10:50 AM', '성경 강해', '', '', 'fa-institution'));
    thirdDay.push(new ScheduleItem('10:50 AM', '11:00 AM', '책소개', '', '', 'fa-thumbs-up'));
    thirdDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '간증', '', '', 'fa-institution'));
    thirdDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('2:00 PM', '3:30 PM', '세미나3', '', '', 'fa-edit'));
    thirdDay.push(new ScheduleItem('3:50 PM', '5:20 PM', '세미나4 / 교역자 세미나', '', '', 'fa-edit'));

    thirdDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('6:30 PM', '9:35 PM', '저녁 집회', '', '', 'fa-institution'));
    thirdDay.push(new ScheduleItem('9:40 PM', '11:15 PM', '조별 나눔', '', '', 'fa-users'));

    let lastDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    lastDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', 'fa-users'));
    lastDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '숙소 Checkout 후 아침 식사', '', '', 'fa-cutlery'));
    lastDay.push(new ScheduleItem('9:15 AM', '10:50 AM', '성경 강해', '', '', 'fa-institution'));
    lastDay.push(new ScheduleItem('10:50 AM', '11:00 AM', '책소개', '', '', 'fa-thumbs-up'));
    lastDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '', '', 'fa-institution'));
    lastDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    lastDay.push(new ScheduleItem('2:00 PM', '3:15 PM', '폐회 예배', '', '', 'fa-institution'));
    lastDay.push(new ScheduleItem('3:15 PM', '4:15 PM', '악수례 / 단체 사진촬영', '', '', 'fa-camera'));

    let tuesday: Schedules = new Schedules('TUE 21 NOV', firstDay);
    let wednesday: Schedules = new Schedules('WED 22 NOV', secondDay);
    let thursday: Schedules = new Schedules('THUR 23 NOV', thirdDay);
    let friday: Schedules = new Schedules('FRI 24 NOV', lastDay);
    this.schedules.push(tuesday);
    this.schedules.push(wednesday);
    this.schedules.push(thursday);
    this.schedules.push(friday);
  }

  private loadConferenceInformation() {
    let prices: Array<Price> = new Array<Price>();
    let earlyBird: Price = new Price("Early Bird Registration: ", "Sunday 01 Oct – Sunday 12 Nov", "$240", "$210");
    let full: Price = new Price("Full Registration: ", "Monday 13 Nov – Tuesday 21 Nov","$260","$230");
    let ministry: Price = new Price("사역자", "","$120","$120");
    let oneDay: Price = new Price("당일 (1일)*", "","$70","$70");
    let oneDayPlusSleep: Price = new Price("당일 (1일 + 숙박)**", "","$100","$100");
    prices.push(earlyBird);
    prices.push(full);
    prices.push(ministry);
    prices.push(oneDay);
    prices.push(oneDayPlusSleep);

    let notes: Array<String> = new Array<String>();
    notes.push("*당일참석은 아침 6시부터 밤 12시까지이며 모든 식사를 포함합니다.");
    notes.push("**숙박을 하는 당일참석은 아침 6시부터 다음날 12시까지이며 모든 식사를 포함합니다.");

    let attention: Array<String> = new Array<String>();
    attention.push("신청서를 보냈어도 참가비를 완납하셔야 등록이 됨을 유의하시기 바랍니다.");
    attention.push("11월 13일 까지 취소할 경우에 100% 환불되며, 그 이후는 환불이 되지 않습니다.");
    attention.push("집회 당일 등록하시는 경우에는 현금, 체크 또는 eftpos로 참가비를 받습니다.");

    // TODO: By Car, By Bus are headings with bold like above
    let howToGetThere: Array<StyledNote> = new Array<StyledNote>();
    howToGetThere.push(new StyledNote('By Car:', false));
    howToGetThere.push(new StyledNote('구글 맵에 University of Waikato Gate 1을 검색하시기 바랍니다.', false));
    howToGetThere.push(new StyledNote('', false));
    howToGetThere.push(new StyledNote('By Bus:', false));
    howToGetThere.push(new StyledNote('from Auckland Airport: nakedbus.com 혹은 intercity.co.nz에서 Auckland Airport - Waikato University (Hamilton)을 검색하신 후 예약하시면 됩니다.', false));
    howToGetThere.push(new StyledNote('from Hamilton City Central: 13번 & 17번, 요금(fare) $3.30 (Adult fare) (한시간 내에 transfer 가능, bus-it card 소지시 $2.40)', false));
    // howToGetThere.push(new StyledNote('13번 & 17번', false));
    // howToGetThere.push(new StyledNote('요금(fare) $3.30 (Adult fare) (한시간 내에 transfer 가능, bus-it card 소지시 $2.40)', false));
    howToGetThere.push(new StyledNote('Busit 안내 링크 http://www.busit.co.nz/Hamilton-routes/University/', false));

    let parkingInfo: Array<String> = new Array<String>();
    // parkingInfo.push('Gate 1으로 들어오셔서 주차장에 차를 세우신 후 parking machine에서 ticket을 구입하시고 자동차에 배치하시면 됩니다.');
    // parkingInfo.push('정확한 information은 와이카토 대학 웹사이트를 참고해주시기 바랍니다. (링크: https://www.waikato.ac.nz/fmd/getting-to-campus/index.shtml)');

    this.conferenceInfo.prices = prices;
    this.conferenceInfo.notes = notes;
    this.conferenceInfo.howToDeposit = '03-1509-0195677-02 (청년 코스타)';
    this.conferenceInfo.attention = attention;
    this.conferenceInfo.howToGetThere = howToGetThere;
    this.conferenceInfo.parkingInfo = parkingInfo;
  }

}
