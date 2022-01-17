import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PistasService, Pista } from "../service/pistas.service";


@Component({
  selector: 'app-escolher-pistas',
  templateUrl: './escolher-pistas.page.html',
  styleUrls: ['./escolher-pistas.page.scss'],
})
export class EscolherPistasPage {

  pistas: Pista[];
  constructor(public router: Router,
    public pistasService: PistasService) {
    pistasService.pistas.subscribe(value => {
      this.pistas = value;
    });
  }

  selecionarPista(index: number) {
    this.pistas[index].selecionado = !this.pistas[index].selecionado;
  }

  irParaCorrida() {
    const pistasSelecionadas = this.pistas.filter(value => {
      return value.selecionado === true;
    });

    if (pistasSelecionadas.length < 3) {
      alert('Selecione as 3 pistas do circuito!');
      return;
    }
    if (pistasSelecionadas.length > 3) {
      alert('Você só pode selecionar 3 pistas para o circuito!');
      return;
    }
      console.log(pistasSelecionadas);
      this.pistasService.salvarpistas(this.pistas);
      this.router.navigate(['comecar-corrida', { pistasSelecionadas: pistasSelecionadas.map(x => x.nome) }]);
    }

    urlImagem(imagem: string) {
      return `../../assets/imgs/pistas/${imagem}`;
    }

  }
