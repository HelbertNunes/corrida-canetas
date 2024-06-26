import { Component, OnInit } from '@angular/core';
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { Trofeu, TrofeusService } from "../service/trofeus.service";

@Component({
  selector: 'app-iniciar-corrida',
  templateUrl: './iniciar-corrida.page.html',
  styleUrls: ['./iniciar-corrida.page.scss'],
})
export class IniciarCorridaPage implements OnInit {

  jogadores: Jogador[];
  trofeus: Trofeu[];

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

  atualizarJogador(event: any, index: number) {
    this.jogadores[index].nome = event.target.value
  }

  adicionarJogador() {
    if (this.jogadores.length === 8) {
      return;
    }

    this.jogadores.push({
      nome: `Jogador ${this.jogadores.length + 1}`,
      pontuacaoTotal: 0,
      trofeus: this.jogadoresService.criaTrofeus(),
      voltas : this.jogadoresService.criaVoltas(),
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
