import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PistasService, Pista } from "../service/pistas.service";

@Component({
  selector: 'app-comecar-corrida',
  templateUrl: './comecar-corrida.page.html',
  styleUrls: ['./comecar-corrida.page.scss'],
})
export class ComecarCorridaPage implements OnInit {

  pistaSelecionada: Pista;

  constructor(public routr: Router, public pistasService: PistasService) {
    pistasService.pistas.subscribe(pistas => this.setPistaSelecionada(pistas));
  }

  ngOnInit() { }

  configuraIconePista() {
    this.configuraFundoPista();

    return `../../assets/imgs/pistas/${this.pistaSelecionada.imagem}`;
  }

  configuraFundoPista() {
    let fundoPistaSelecionada = this.pistaSelecionada.backgroundImg;

    let urlFundoPista = `url('../../assets/imgs/background/${fundoPistaSelecionada}')`;

    const fundoPista = document.getElementById("fundoPista");
    fundoPista.style.backgroundImage = urlFundoPista;
  }

  setPistaSelecionada(pistas: Pista[]) {
    this.pistaSelecionada = pistas.filter(pista => pista.selecionado)[0];
  }
}
