export class EveventLaFete {
  titreEvent: string;
  imageSrc: string;
  date: string;
  lieu: string;
  prix: string;
  duree: string;
  restriction: string;
  preface: string;
  description: string;
  siteWeb: string;

  constructor(
    titreEvent: string,
    imageSrc: string,
    date: string,
    lieu: string,
    prix: string,
    duree: string,
    restriction: string,
    preface: string,
    description: string,
    siteWeb: string
  ) {
    this.titreEvent = titreEvent;
    this.imageSrc = imageSrc;
    this.date = date;
    this.lieu = lieu;
    this.prix = prix;
    this.duree = duree;
    this.restriction = restriction;
    this.preface = preface;
    this.description = description;
    this.siteWeb = siteWeb;
  }
}
