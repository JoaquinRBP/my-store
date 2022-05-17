import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent:string = 'https://source.unsplash.com/random';
  title = 'my-store';
  recibido(evento:string){
    console.log(evento);
  }
}
