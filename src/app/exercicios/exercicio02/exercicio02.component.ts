import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exercicio04Component } from '../exercicio04/exercicio04.component';

@Component({
  selector: 'app-exercicio02',
  standalone: true,
  imports: [FormsModule, Exercicio04Component],
  templateUrl: './exercicio02.component.html',
  styleUrl: './exercicio02.component.css'
})
export class Exercicio02Component {
  novoItem = '';
  items: string[] = [];

  adicionar(){
    this.items.push(this.novoItem);
    this.novoItem = '';
  }
}
