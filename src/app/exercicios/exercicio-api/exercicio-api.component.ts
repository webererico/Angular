import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from './api-service.service';
import { Result } from './api-interface';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-exercicio-api',
  standalone: true,
  imports: [MatButtonModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './exercicio-api.component.html',
  styleUrl: './exercicio-api.component.css'
})
export class ExercicioAPIComponent {
  isLoading = false;
  comicList: Result[] = [];
  constructor(private apiService: ApiService){}

  carregarAPI() {
    console.log('entrou');
    this.isLoading = true;
    this.apiService.getData().subscribe((data)=>{
      console.log('chegou dado');
      this.comicList = data.data.results;
      console.log(this.comicList);
      this.isLoading = false;
      
    });
    console.log('acabou o metodo');
  }

}
