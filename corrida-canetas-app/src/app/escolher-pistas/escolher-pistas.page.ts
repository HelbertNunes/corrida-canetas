import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PistasService, Pista } from "../service/pistas.service";
import { CircuitosService, Circuito } from "../service/circuito.service";
import { JogadoresService, Jogador } from "../service/jogadores.service";


@Component({
  selector: 'app-escolher-pistas',
  templateUrl: './escolher-pistas.page.html',
  styleUrls: ['./escolher-pistas.page.scss'],
})
export class EscolherPistasPage {

  pistas: Pista[];
  circuito: Circuito;
  jogadores: Jogador[];

  constructor(public router: Router,
    public pistasService: PistasService,
    public circuitoService: CircuitosService,
    public jogadoresService: JogadoresService) {
    pistasService.pistas.subscribe(value => {
      this.pistas = value;
    });
    circuitoService.circuito.subscribe(value => {
      this.circuito = value;
    });
    jogadoresService.jogadores.subscribe(value => {
      this.jogadores = value;
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
    this.pistasService.salvarpistas(this.pistas);
    this.criaCircuito(pistasSelecionadas, this.jogadores);
    this.router.navigate(['comecar-corrida', { pistasSelecionadas: pistasSelecionadas.map(x => x.nome) }]);
  }

  criaCircuito(pistasSelecionadas: Pista[], jogadores: Jogador[]) {
    this.circuito.pistas = pistasSelecionadas;
    this.zeraPontuacoes(jogadores);
    this.circuitoService.salvarCircuito(this.circuito);
  }

  zeraPontuacoes(jogadores: Jogador[]) {
    for (let jogador of jogadores) {
      // jogador.pontuacao = 0;
    }
    // this.jogadoresService.salvarJogadores(jogadores);
  }

  urlImagem(imagem: string) {
    return `../../assets/imgs/pistas/${imagem}`;
  }

}
