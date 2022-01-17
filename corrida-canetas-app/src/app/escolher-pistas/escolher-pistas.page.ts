import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface Pista {
  nome: string;
  imagem: string;
  selecionado: boolean;
}

@Component({
  selector: 'app-escolher-pistas',
  templateUrl: './escolher-pistas.page.html',
  styleUrls: ['./escolher-pistas.page.scss'],
})
export class EscolherPistasPage {

  pistas: Pista[] = [
    {
      nome: 'Beach Cup',
      imagem: 'beach_cup.png',
      selecionado: false,
    },
    {
      nome: 'Bedroom Cup',
      imagem: 'bedroom_cup.png',
      selecionado: false,
    },
    {
      nome: 'Picnic Cup',
      imagem: 'picnic_cup.png',
      selecionado: false,
    },
    {
      nome: 'Kitchen Cup',
      imagem: 'kitchen_cup.png',
      selecionado: false,
    },
    {
      nome: 'Playground Cup',
      imagem: 'playground_cup.png',
      selecionado: false,
    },
    {
      nome: 'Tabletop Cup',
      imagem: 'tabletop_cup.png',
      selecionado: false,
    },
  ];

  constructor(public router: Router) {
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

    //this.router.navigate(['home', { pistasSelecionadas: pistasSelecionadas.map(x => x.nome) }]);
  }

  urlImagem(imagem: string) {
    return `../../assets/imgs/pistas/${imagem}`;
  }

}
