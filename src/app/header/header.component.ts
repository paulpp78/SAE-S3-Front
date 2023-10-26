import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../../assets/home/css/fontawesome.min.css',
  ],
})
export class HeaderComponent {
  constructor(private router: Router, private elRef: ElementRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundClasses(event.url);
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const menu = this.elRef.nativeElement.querySelector('#Hainaut_main_nav');
    if (
      event.target !== menu &&
      !menu.contains(event.target) &&
      event.target !== document.querySelector('.navbar-toggler')
    ) {
      menu.classList.remove('show');
    }
  }
  updateBackgroundClasses(url: string) {
    const header = document.querySelector('.header') as HTMLElement;

    header.classList.remove(
      'home-background',
      'communaute-background',
      'evenement-background',
      'contact-background'
    );

    if (url === '/communaute') {
      header.classList.add('communaute-background');
    } else if (url === '/evenement') {
      header.classList.add('evenement-background');
    } else if (url === '/contact') {
      header.classList.add('contact-background');
    } else header.classList.add('home-background');
  }
  ngOnInit() {
    this.updateBackgroundClasses(this.router.url);
  }
}
