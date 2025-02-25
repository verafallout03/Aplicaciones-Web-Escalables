import { Component } from '@angular/core';
import { Product } from '../../../interfaces/show.interface';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  @Input()
  product : Product = {
    id : 0,
    name: '',
    price : 0,
    inStock : true,
    onSale: true,
    img : ""
  }
}
