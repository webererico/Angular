import { Component } from '@angular/core';
import { ICarro } from '../../interfaces/ICarro';
import { CarService } from '../../services/car-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  carList: ICarro[] = [];
  constructor(private carroService: CarService) {
  }

  obterTodosCarros() {
    this.carroService.obterTodos().subscribe({
      next: (data) => {
        this.carList = data;
      },
      error: (erro) => {
        alert('Invalido');
      }
    })
  }

  obterSomenteUmCarro() {
    this.carroService.obterPorId(10).subscribe(res => console.log('Obteve', res));
  }

  adicionarCarro() {
    const novoCarro: ICarro = {
      name: 'Novo carro',
      brand: "Chines"
    }

    this.carroService.adicionar(novoCarro).subscribe(res => console.log("Adicionado"));
  }

  atualizarCarro() {
    const carroAtualizado: ICarro = {
      id: 2,
      brand: "Ford",
      name: "Ranger"
    }
    this.carroService.atualizar(carroAtualizado).subscribe(res => console.log("Atualizou", res));
  }

  removerCarro() {
    this.carroService.apagar(2).subscribe(res => console.log('🔴 Removido', res))
  }
}
