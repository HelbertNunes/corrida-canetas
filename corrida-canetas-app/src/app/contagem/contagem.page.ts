import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.page.html',
  styleUrls: ['./contagem.page.scss'],
})
export class ContagemPage implements OnInit {

  constructor(
    public platform: Platform
  ) { }

  async ngOnInit() {
    await this.carregaContagem()
  }

  async carregaContagem() {
    const body = document.getElementById("fundo");
    const texto = document.getElementById("text");    
    await this.delay(1000);
    body.style.backgroundColor = '#F6A022';
    texto.textContent = '2'
    await this.delay(1000);
    body.style.backgroundColor = '#64A83E';
    texto.textContent = '1'
    await this.delay(1000);
    body.style.backgroundColor = '#3C8ACC';
    texto.textContent = 'JÁ!'
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
