export class ScheduleItem {
  start : String;
  end : String;
  title: String;
  speaker : String;
  details: String;
  icon : String;

  constructor(start: String, end: String, title: String, speaker: String, details: String, icon: String) {
    this.start = start;
    this.end = end;
    this.title = title;
    this.speaker = speaker;
    this.details = details;
    this.icon = icon;
  }
}
