import { Component, Input } from '@angular/core';
import { IMenu } from '../../interfaces/IMenu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  @Input()
  listaMenu!: IMenu[];
}
