import { Component, OnInit } from '@angular/core';
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { TrofeusService, Trofeu } from "../service/trofeus.service";
import { CircuitosService, Circuito, Volta } from "../service/circuito.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.page.html',
  styleUrls: ['./pontuacao.page.scss'],
})

export class PontuacaoPage implements OnInit {

  jogadoresVisual: Jogador[];
  trofeus: Trofeu[];
  circuito: Circuito;

  constructor(
    public router: Router,
    public jogadoresService: JogadoresService,
    public trofeusService: TrofeusService,
    public circuitoService: CircuitosService
  ) {
    jogadoresService.jogadores.subscribe(value => this.jogadoresVisual = value);
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
      this.circuito.voltas[this.circuito.numeroVolta].jogadores[indexJogador].pontosTrofeu = jogador.pontosTrofeu;
      this.jogadoresVisual[indexJogador].pontosTrofeu = jogador.pontosTrofeu;
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
    console.log(this.jogadoresVisual);
    console.log(this.circuito.numeroVolta);
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
    console.log(this.circuito.voltas[this.circuito.numeroVolta].jogadores[index]);
    this.salvarPontuacao();
  }

  salvarPontuacao() {
    this.circuitoService.salvarCircuito();
  }

  proximaPista() {
    console.log(this.circuito);

    this.reiniciaPontosJogadoresVisual();

    if (this.circuito.numeroVolta < 2) {
      this.circuito.numeroVolta++;
      this.circuitoService.salvarCircuito();
      this.router.navigate(['comecar-corrida']);
    }
    else {
      this.router.navigate(['vencedor-corrida']);
    }
  }

  reiniciaPontosJogadoresVisual() {
    this.jogadoresVisual.forEach(jogador => {
      jogador.pontosTrofeu = 0;
      jogador.pontuacao = 0;
      jogador.bonus = 0;
      jogador.faltas = 0;
      jogador.trofeus.forEach(trofeu => {
        trofeu.selecionado = false;
      });
    });
  }
}
