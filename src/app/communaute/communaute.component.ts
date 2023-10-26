import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css'],
})
export class CommunauteComponent {
  currentActiveDiv: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const headers = document.querySelectorAll('#text h2');

    window.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === 'H2') {
        const parentDiv = target.parentElement as HTMLElement;

        if (parentDiv === this.currentActiveDiv) {
          this.hideHoveredContent();
          this.renderer.removeClass(parentDiv, 'active');
          this.currentActiveDiv = null;
        } else {
          headers.forEach((h: Element) => {
            const hParentDiv = (h as HTMLElement).parentElement as HTMLElement;
            this.renderer.removeClass(hParentDiv, 'active');
          });

          this.renderer.addClass(parentDiv, 'active');

          const siblings: HTMLElement[] = [];
          let nextSibling = target.nextElementSibling;

          while (nextSibling && nextSibling.tagName !== 'H2') {
            siblings.push(nextSibling.cloneNode(true) as HTMLElement);
            nextSibling = nextSibling.nextElementSibling;
          }

          this.showHoveredContent(siblings);
          this.currentActiveDiv = parentDiv;
        }
      }
    });
  }

  showHoveredContent(elements: HTMLElement[]) {
    const contentDiv = document.getElementById(
      'hovered-content'
    ) as HTMLElement;
    contentDiv.innerHTML = '';
    elements.forEach((el) => contentDiv.appendChild(el));

    this.renderer.setStyle(contentDiv, 'backgroundColor', '#41537D');
    this.renderer.setStyle(contentDiv, 'opacity', '1');
    this.renderer.setStyle(contentDiv, 'visibility', 'visible');
  }

  hideHoveredContent() {
    const contentDiv = document.getElementById(
      'hovered-content'
    ) as HTMLElement;
    this.renderer.setStyle(contentDiv, 'opacity', '0');
    this.renderer.setStyle(contentDiv, 'visibility', 'hidden');
  }
}
