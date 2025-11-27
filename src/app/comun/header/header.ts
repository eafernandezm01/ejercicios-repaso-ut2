import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  miNombre: string = 'Eva A. FM';


  getFecha (): string {
    return new Date().toLocaleDateString();
  }
}
