import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './app/content/content.component';
import { Product } from '../interfaces/show.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentComponent, NgFor, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  selectedItem : Product | null = null;

  products : Product[] = 
  [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false , img:'https://www.costco.com.mx/medias/sys_master/products/he5/hed/188081226154014.webp'},
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true , img:'https://m.media-amazon.com/images/I/61aiFCe6PpL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false , img:'https://m.media-amazon.com/images/I/61aiFCe6PpL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true ,img:'https://m.media-amazon.com/images/I/81ocT1HEurL.__AC_SY300_SX300_QL70_ML2_.jpg'},
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false ,img:'https://m.media-amazon.com/images/I/61p0Yq8c9DL._AC_SX522_.jpg'},
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false ,img:'https://m.media-amazon.com/images/I/61bblc2QuzL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true ,img:'https://m.media-amazon.com/images/I/51wzC9+uYgL._AC_SX522_.jpg'},
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false ,img:'https://m.media-amazon.com/images/I/81EF27n233L._AC_SX522_.jpg'},
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true ,img:'https://m.media-amazon.com/images/I/61Uv-FfdGGL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false ,img:'https://m.media-amazon.com/images/I/61W63FbL1yL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true,img:'https://m.media-amazon.com/images/I/81+9rUcRVTL._AC_SY300_SX300_.jpg' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false ,img:'https://m.media-amazon.com/images/I/61cd5Oeo9UL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true ,img:'https://m.media-amazon.com/images/I/41nWydiju6L.__AC_SX300_SY300_QL70_ML2_.jpg'},
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false ,img:'https://m.media-amazon.com/images/I/71g2Lc8urJL._AC_SX522_.jpg'},
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true ,img:'https://m.media-amazon.com/images/I/61fIOG8v5WL.__AC_SX300_SY300_QL70_ML2_.jpg'},
  ]

  SelectItem(product : Product) : void  {
    this.selectedItem = product;
  }
}


