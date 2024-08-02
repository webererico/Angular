import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio01.component.html',
  styleUrl: './exercicio01.component.css'
})
export class Exercicio01Component {
  listName = ['Erico', 'Daniel', 'Joao'];
}
