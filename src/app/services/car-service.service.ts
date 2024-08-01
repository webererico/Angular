import { Injectable } from '@angular/core';
import { ICarro } from '../interfaces/ICarro';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpCliente: HttpClient) { }


  // GET
  obterTodos() {
    return this.httpCliente.get<ICarro[]>(`${API_PATH}carros`);
  }

  // GET BY ID
  obterPorId(id: number) {
    return this.httpCliente.get<ICarro>(`${API_PATH}carros/${id}`);
  }

  // POST
  adicionar(carro: ICarro) {
    return this.httpCliente.post<ICarro>(`${API_PATH}carros`, carro);
  }

  // PUT = UPDATE
  atualizar(carro: ICarro) {
    console.log(carro);
    return this.httpCliente.put<ICarro>(`${API_PATH}carros/${carro.id}`, carro);
  }

  // DELETE
  apagar(id: number) {
    return this.httpCliente.delete<void>(`${API_PATH}carros/${id}`);
  }
}
