import { Component, OnInit } from '@angular/core';
import {JogadoresService, Jogador} from "../service/jogadores.service";
import {TrofeusService, Trofeu} from "../service/trofeus.service";

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.page.html',
  styleUrls: ['./pontuacao.page.scss'],
})
export class PontuacaoPage implements OnInit {

  jogadores: Jogador[];
  trofeus : Trofeu[];

  constructor(
    public jogadoresService: JogadoresService,
    public trofeusService: TrofeusService
  ) {
    jogadoresService.jogadores.subscribe(value => {
      this.jogadores = value;
    });
    trofeusService.trofeus.subscribe(value => {
      this.trofeus = value;
    });
  }

  ngOnInit() {
  }

  urlImagem(imagem: string) {
    return `../../assets/imgs/icones/${imagem}`;
  }
  
  selecionarTrofeu(index: number) {
    this.trofeus[index].selecionado = !this.trofeus[index].selecionado;
  }

}
