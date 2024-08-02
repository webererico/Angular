import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  standalone: true,
  imports: [],
  templateUrl: './exercicio04.component.html',
  styleUrl: './exercicio04.component.css'
})
export class Exercicio04Component {
  count = 0;
  incrementar() {
    this.count++;
  }
}
