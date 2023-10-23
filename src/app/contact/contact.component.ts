import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  modalRecrutement: HTMLElement | null = null;
  modalFAQ: HTMLElement | null = null;
  isMenuClosed = true;

  constructor() {}

  ngOnInit(): void {
    this.modalRecrutement = document.getElementById('modalRecrutement');
    this.modalFAQ = document.getElementById('modalFAQ');
  }

  openFAQ() {
    if (this.modalFAQ) {
      this.modalFAQ.style.display = 'block';
      this.isMenuClosed = false;
    }
  }

  openRecrutement() {
    if (this.modalRecrutement) {
      this.modalRecrutement.style.display = 'block';
      this.isMenuClosed = false;
    }
  }

  closeFAQ() {
    if (this.modalFAQ) {
      this.modalFAQ.style.display = 'none';
      this.isMenuClosed = true;
    }
  }

  closeRecrutement() {
    if (this.modalRecrutement) {
      this.modalRecrutement.style.display = 'none';
      this.isMenuClosed = true;
    }
  }

  submitRecrutementForm(event: Event) {
    event.preventDefault();

    const poste = (document.getElementById('poste') as HTMLSelectElement).value;
    const nom = (document.getElementById('nom') as HTMLInputElement).value;
    const prenom = (document.getElementById('prenom') as HTMLInputElement)
      .value;
    const telephone = (document.getElementById('telephone') as HTMLInputElement)
      .value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    console.log('Poste demandé :', poste);
    console.log('Nom :', nom);
    console.log('Prénom :', prenom);
    console.log('Numéro de téléphone :', telephone);
    console.log('Email :', email);
  }
}
