import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab: InAppBrowser) { }

    abreSiteCompra(){
      this.iab.create("https://geeksnorcs.com.br/corrida-de-canetas/");
    }
}
