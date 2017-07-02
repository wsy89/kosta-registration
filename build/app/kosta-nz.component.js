System.register(["@angular/core", "./model/introduction", "./model/speaker", "./model/schedules", "./model/scheduleItem"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, introduction_1, speaker_1, schedules_1, scheduleItem_1, KostaComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (introduction_1_1) {
                introduction_1 = introduction_1_1;
            },
            function (speaker_1_1) {
                speaker_1 = speaker_1_1;
            },
            function (schedules_1_1) {
                schedules_1 = schedules_1_1;
            },
            function (scheduleItem_1_1) {
                scheduleItem_1 = scheduleItem_1_1;
            }
        ],
        execute: function () {
            KostaComponent = (function () {
                function KostaComponent() {
                    this.kostaIntro = new Array();
                    this.speakers = new Array();
                    this.schedules = new Array();
                }
                KostaComponent.prototype.ngOnInit = function () {
                    this.loadBasicDetails();
                    this.loadIntroduction();
                    this.loadSpeakers();
                    this.loadSchedules();
                    this.loadContacts();
                };
                KostaComponent.prototype.loadContacts = function () {
                    this.address = 'Waikato University, Hillcrest, Hamilton 3216, New Zealand';
                    this.email = 'kostanz@gmail.com';
                    this.phoneNumber = '021 84 9191';
                };
                KostaComponent.prototype.loadBasicDetails = function () {
                    this.subTitle = 'KOSTA';
                    this.title = 'KOSTA';
                    this.location = 'Hamilton, Auckland';
                    this.datetime = '21.Nov ~ 24.Nov 2017';
                };
                KostaComponent.prototype.loadIntroduction = function () {
                    this.kostaIntro.push(new introduction_1.Introduction('title', 'text', 'assets/img/imac-371x412.png'));
                    this.kostaIntro.push(new introduction_1.Introduction('title2', 'text2', 'assets/img/imac-371x412.png'));
                };
                KostaComponent.prototype.loadSpeakers = function () {
                    this.speakers.push(new speaker_1.Speaker("../assets/img/speakers/speaker1.jpg", "name", "title", "details"));
                    this.speakers.push(new speaker_1.Speaker("../assets/img/speakers/speaker1.jpg", "name2", "title3", "details4"));
                    this.speakers.push(new speaker_1.Speaker("../assets/img/speakers/speaker1.jpg", "name2", "title3", "details4"));
                };
                KostaComponent.prototype.loadSchedules = function () {
                    var firstDay = new Array();
                    firstDay.push(new scheduleItem_1.ScheduleItem('1:30 PM', '3:00 PM', '등록 / 숙소 배정', '', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('3:00 PM', '4:15 PM', '개회예배', '양승봉', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('4:15 PM', '5:00 PM', '오리엔테이션', '', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('5:00 PM', '5:30 PM', '조별 모임', '', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
                    firstDay.push(new scheduleItem_1.ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '김대로', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('9:30 PM', '9:35 PM', '이동', '', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', ''));
                    firstDay.push(new scheduleItem_1.ScheduleItem('11:00 PM', '11:15 PM', '취침', '', '', ''));
                    var secondDay = new Array();
                    secondDay.push(new scheduleItem_1.ScheduleItem('6:30 AM', '7:00 AM', '기상 및 세면', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
                    secondDay.push(new scheduleItem_1.ScheduleItem('9:00 AM', '9:15 AM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('10:55 AM', '11:20 AM', 'Tea Time', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('11:20 AM', '12:30 PM', '오전특강', '탁지원', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
                    secondDay.push(new scheduleItem_1.ScheduleItem('1:30 PM', '1:50 PM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('1:50 PM', '3:20 PM', '세미나1', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('3:20 PM', '3:40 PM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('3:40 PM', '5:10 PM', '세미나2', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('5:10 PM', '5:30 PM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
                    secondDay.push(new scheduleItem_1.ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '송병주', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('9:30 PM', '9:35 PM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('11:00 PM', '11:15 PM', '취침', '', '', ''));
                    var thirdDay = new Array();
                    secondDay.push(new scheduleItem_1.ScheduleItem('6:30 AM', '7:00 AM', '기상 및 세면', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
                    secondDay.push(new scheduleItem_1.ScheduleItem('9:00 AM', '9:15 AM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('10:55 AM', '11:20 AM', 'Tea Time', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '이영길', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
                    secondDay.push(new scheduleItem_1.ScheduleItem('1:30 PM', '1:50 PM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('1:50 PM', '3:20 PM', '세미나3', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('3:20 PM', '3:40 PM', '이동', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('3:40 PM', '5:10 PM', '세미나4 / 교역자 세미나', '', '', ''));
                    secondDay.push(new scheduleItem_1.ScheduleItem('5:10 PM', '5:30 PM', '이동', '', '', ''));
                    thirdDay.push(new scheduleItem_1.ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
                    thirdDay.push(new scheduleItem_1.ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '송병주', '', ''));
                    thirdDay.push(new scheduleItem_1.ScheduleItem('9:30 PM', '9:35 PM', '이동', '', '', ''));
                    thirdDay.push(new scheduleItem_1.ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', ''));
                    thirdDay.push(new scheduleItem_1.ScheduleItem('11:00 PM', '11:15 PM', '취침', '', '', ''));
                    var lastDay = new Array();
                    lastDay.push(new scheduleItem_1.ScheduleItem('6:30 AM', '7:00 AM', '기상 및 세면', '', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('8:00 AM', '9:00 AM', '아침 식사 / 숙소 Checkout', '', '', 'fa-cutlery'));
                    lastDay.push(new scheduleItem_1.ScheduleItem('9:00 AM', '9:15 AM', '이동', '', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('10:55 AM', '11:20 AM', 'Tea Time', '', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
                    lastDay.push(new scheduleItem_1.ScheduleItem('1:30 PM', '1:50 PM', '이동', '', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('1:50 PM', '3:15 PM', '폐회 예배', '송병주', '', ''));
                    lastDay.push(new scheduleItem_1.ScheduleItem('3:15 PM', '4:15 PM', '악수례 / 단체 사진촬영', '', '', ''));
                    var tuesday = new schedules_1.Schedules("TUESDAY, NOV.21", firstDay);
                    var wednesday = new schedules_1.Schedules("WEDNESDAY, NOV.22", secondDay);
                    var thursday = new schedules_1.Schedules("THURSDAY, NOV.23", thirdDay);
                    var friday = new schedules_1.Schedules("FRIDAY, NOV.24", lastDay);
                    this.schedules.push(tuesday);
                    this.schedules.push(wednesday);
                    this.schedules.push(thursday);
                    this.schedules.push(friday);
                };
                return KostaComponent;
            }());
            KostaComponent = __decorate([
                core_1.Component({
                    selector: "kosta",
                    templateUrl: "./app/kosta-nz.html"
                })
            ], KostaComponent);
            exports_1("KostaComponent", KostaComponent);
        }
    };
});

//# sourceMappingURL=kosta-nz.component.js.map
