import { Component } from '@angular/core';
import { HeaderComponent } from './Component/header/header.component';
import { ContentComponent } from './Component/content/content.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CounterComponent } from './Component/counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ContentComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

