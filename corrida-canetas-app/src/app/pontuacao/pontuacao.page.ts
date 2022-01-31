import { Component, OnInit } from '@angular/core';
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { TrofeusService, Trofeu } from "../service/trofeus.service";
import { CircuitosService, Circuito, Volta } from "../service/circuito.service";
import { iif } from 'rxjs';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.page.html',
  styleUrls: ['./pontuacao.page.scss'],
})

export class PontuacaoPage implements OnInit {

  jogadores: Jogador[];
  trofeus: Trofeu[];
  circuito: Circuito;

  constructor(
    public jogadoresService: JogadoresService,
    public trofeusService: TrofeusService,
    public circuitoService: CircuitosService
  ) {
    jogadoresService.jogadores.subscribe(value => this.jogadores = value);
    trofeusService.trofeus.subscribe(value => this.trofeus = value);
    circuitoService.circuito.subscribe(value => this.circuito = value);
  }

  ngOnInit() { }

  urlImagem(imagem: string) {
    return `../../assets/imgs/icones/${imagem}`;
  }

  selecionarTrofeu(indexJogador: number, indexTrofeu: number) {
    let jogador = this.circuito.voltas[this.circuito.numeroVolta].jogadores[indexJogador];
    const trofeuSelecionado = jogador.trofeus.filter(value => {
      return value.selecionado === true;
    });

    if (trofeuSelecionado.length === 1 && !jogador.trofeus[indexTrofeu].selecionado) {
      alert("Você só pode selecionar um troféu por jogador!");
      return;
    }

    else {
      if (trofeuSelecionado[0] === jogador.trofeus[indexTrofeu]) {
        jogador.pontosTrofeu = 0;
      }
      else {
        jogador.pontosTrofeu = jogador.trofeus[indexTrofeu].pontos;
      }

      jogador.trofeus[indexTrofeu].selecionado = !jogador.trofeus[indexTrofeu].selecionado;
      this.circuito.voltas[this.circuito.numeroVolta].jogadores[indexJogador] = jogador;
      this.jogadores[indexJogador] = jogador;
      this.atualizarPontuacao(null, indexJogador, 3);
    }
  }

  atualizarFaltas(event: any, index: number) {
    this.atualizarPontuacao(event, index, 2);
  }

  atualizarPontos(event: any, index: number) {
    this.atualizarPontuacao(event, index, 1);
  }

  atualizarPontuacao(event: any, index: number, tipoPontuacao: number) {
    let jogador = this.circuito.voltas[this.circuito.numeroVolta].jogadores[index];
    if (event != null) {
      var valor = event.target.value != "" ? parseInt(event.target.value) : 0;
    }

    if (tipoPontuacao == 1)
      jogador.bonus = valor;

    if (tipoPontuacao == 2)
      jogador.faltas = valor;

    jogador.pontuacao = jogador.bonus - jogador.faltas + jogador.pontosTrofeu;
    let pontuacaoText = document.getElementById(`lbPontuacao_${index}`);
    pontuacaoText.innerText = jogador.pontuacao.toString();
    this.circuito.voltas[this.circuito.numeroVolta].jogadores[index] = jogador;
    this.jogadores[index] = jogador;
    console.log(jogador);

    this.salvarPontuacao();
  }

  salvarPontuacao() {
    this.jogadoresService.salvarJogadores(this.jogadores);
    this.circuitoService.salvarVoltas(this.circuito.voltas);
    this.circuitoService.salvarCircuito();
  }
}
