import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showContent(contentId: string) {
    const event = new CustomEvent('contentChange', { detail: contentId });
    window.dispatchEvent(event);
  }
}