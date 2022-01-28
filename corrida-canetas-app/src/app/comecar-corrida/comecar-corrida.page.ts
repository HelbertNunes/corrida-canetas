import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PistasService, Pista } from "../service/pistas.service";

@Component({
  selector: 'app-comecar-corrida',
  templateUrl: './comecar-corrida.page.html',
  styleUrls: ['./comecar-corrida.page.scss'],
})
export class ComecarCorridaPage implements OnInit {

  pistas: Pista[];
  constructor(public router: Router,
    public pistasService: PistasService) {
    pistasService.pistas.subscribe(value => {
      this.pistas = value;
    });
  }


  ngOnInit() {
  }

  urlImagem() {
    let pistasSelecionadas = this.pistas.filter(value => {
      return value.selecionado === true;
    });
    this.urlImagemBkg();
    return `../../assets/imgs/pistas/${pistasSelecionadas[0].imagem}`;
  }

  urlImagemBkg() {
    let pistasSelecionadas = this.pistas.filter(value => {
      return value.selecionado === true;
    });
    const bkg = document.getElementById("bkg");
    // bkg.style.backgroundImage = `"url('../../assets/imgs/background/${pistasSelecionadas[0].backgroundImg}')"`;
    bkg.style.backgroundImage = "url('../../assets/imgs/background/picnic.jpg')";
  }
}
