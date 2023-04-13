import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.page.html',
  styleUrls: ['./contagem.page.scss'],
})
export class ContagemPage implements OnInit {

  body:HTMLElement;
  text:HTMLElement;
  button:HTMLElement;

  constructor(
    public platform: Platform,
    private router: Router
  ) { }

  async ngOnInit() {
    // this.nativeAudio.preloadSimple('somContagem', '../../assets/sounds/Pop 2.mp3');
    // this.nativeAudio.preloadSimple('somJa', '../../assets/sounds/Big Bell.mp3');
    this.body = document.getElementById("fundo");
    this.text = document.getElementById("text");
    this.button = document.getElementById("btPontuacao");
  }

  async ionViewWillEnter(){
    await this.carregaContagem(); 
  }

  async ionViewDidLeave(){
    this.body.style.backgroundColor = '#e83c47';
    this.text.textContent = '3'
    this.button.style.display = 'block';
  }

  async carregaContagem() {
    await this.delay(500);
    this.body.style.backgroundColor = '#e83c47';
    this.text.textContent = '3'
    await this.delay(1000);
    this.body.style.backgroundColor = '#F6A022';
    this.text.textContent = '2'
    await this.delay(1000);
    this.body.style.backgroundColor = '#64A83E';
    this.text.textContent = '1'
    await this.delay(1000);
    this.body.style.backgroundColor = '#3C8ACC';
    this.text.textContent = 'JÁ!'
    this.button.style.display = 'block';
  }

  irParaPontuacao(){
    this.router.navigate(['pontuacao']);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
