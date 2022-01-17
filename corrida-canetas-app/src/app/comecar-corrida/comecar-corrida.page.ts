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

    return `../../assets/imgs/pistas/${pistasSelecionadas[0].imagem}`;
  }
}
