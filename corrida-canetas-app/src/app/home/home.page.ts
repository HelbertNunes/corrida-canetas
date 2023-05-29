import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  abreSiteCompra(){
    window.open("https://www.playeasy.com.br/corrida-de-canetas.html")
  }
}
