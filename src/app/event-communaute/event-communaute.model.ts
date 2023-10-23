export class EventCommunaute {
  titreEvent: string;
  imageSrc?: string;
  date: string;
  lieu: string;

  constructor(
    titreEvent: string,
    date: string,
    lieu: string,
    imageSrc?: string
  ) {
    this.titreEvent = titreEvent;
    this.imageSrc = imageSrc;
    this.date = date;
    this.lieu = lieu;
  }
}
