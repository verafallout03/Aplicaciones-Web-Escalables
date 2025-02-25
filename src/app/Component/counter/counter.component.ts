import { Component } from '@angular/core';
//se importa biblioteca para le uso de las condicionales if
import { NgIf } from '@angular/common';
//se importan los ciclos for para su uso
//import { NgFor } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter : number = 100;
    constructor(){
      this.counter++;
      console.log("construyendo el componente counter");
      this.incrementBy(2);
    }
  incrementBy(value : number = 1) : void{
    this.counter+=value;
  }
}