import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.page.html',
  styleUrls: ['./contagem.page.scss'],
})
export class ContagemPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {        
        this.carregaContagem();
      }
    });
  }

  async ngOnInit() {
  }

  async carregaContagem() {
    const body = document.getElementById("fundo");
    const texto = document.getElementById("text");
    const botao = document.getElementById("btPontuacao");
    await this.delay(500);
    body.style.backgroundColor = '#e83c47';
    texto.textContent = '3'
    await this.delay(1000);
    body.style.backgroundColor = '#F6A022';
    texto.textContent = '2'
    await this.delay(1000);
    body.style.backgroundColor = '#64A83E';
    texto.textContent = '1'
    await this.delay(1000);
    body.style.backgroundColor = '#3C8ACC';
    texto.textContent = 'JÁ!'
    
    botao.style.display = 'block';
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
