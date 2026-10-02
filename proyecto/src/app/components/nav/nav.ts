import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  menuOpen = false;

  cerrarMenu() {
    this.menuOpen = false;
  }

}
