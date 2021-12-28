import { Component, OnInit } from '@angular/core';
import {JogadoresService, Jogador} from "../service/jogadores.service";

@Component({
  selector: 'app-iniciar-corrida',
  templateUrl: './iniciar-corrida.page.html',
  styleUrls: ['./iniciar-corrida.page.scss'],
})
export class IniciarCorridaPage implements OnInit {

  jogadores: Jogador[];

  constructor(
    public jogadoresService: JogadoresService
  ) {
    jogadoresService.jogadores.subscribe(value => {
      this.jogadores = value;
    });
  }

  ngOnInit() {
  }

  atualizarJogador(event: any, index: number) {
    this.jogadores[index].nome = event.target.value
  }

  adicionarJogador() {
    if (this.jogadores.length === 4) {
      return;
    }

    this.jogadores.push({
      nome: `Jogador ${this.jogadores.length + 1}`,
      pontos: 0,
    });
    this.salvarJogadores();
  }

  removerJogador(index: number) {
    this.jogadores.splice(index, 1);
    this.salvarJogadores();
  }

  salvarJogadores() {
    this.jogadoresService.salvarJogadores(this.jogadores);
  }

}
