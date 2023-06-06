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
  abreManual(){
    window.open("https://www.dropbox.com/s/umy0h1icglk2l2y/manual_corrida_v2.0.pdf?dl=0")
  }
  
}
