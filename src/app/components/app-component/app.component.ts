import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devstack';

  blurNavbar: boolean = false;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.blurNavbar = window.pageYOffset === 0 ? false : true;
  }
}
