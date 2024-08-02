import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventComponent } from './components/event/event.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CarListComponent } from './components/car-list/car-list.component';
import { Exercicio01Component } from './exercicios/exercicio01/exercicio01.component';
import { Exercicio02Component } from './exercicios/exercicio02/exercicio02.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FirstComponentComponent,
    ParentDataComponent,
    DirectiveComponent,
    IfRenderComponent,
    EventComponent,
    EmitterComponent,
    ListRenderComponent,
    PipeOperatorComponent,
    TwoWayBindingComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CarListComponent,
    Exercicio01Component,
    Exercicio02Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'O titulo que estou passando é esseadsadadad';
}
