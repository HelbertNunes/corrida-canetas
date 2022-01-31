import { Component, OnInit } from '@angular/core';
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { TrofeusService, Trofeu } from "../service/trofeus.service";
import { CircuitosService, Circuito, Volta } from "../service/circuito.service";

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
        jogador.pontuacao -= jogador.trofeus[indexTrofeu].pontos;
      }
      else {
        jogador.pontuacao += jogador.trofeus[indexTrofeu].pontos;
      }

      jogador.trofeus[indexTrofeu].selecionado = !jogador.trofeus[indexTrofeu].selecionado;
      this.circuito.voltas[this.circuito.numeroVolta].jogadores[indexJogador] = jogador;
      let pontuacaoText = document.getElementById(`lbPontuacao_${indexJogador}`);
      this.jogadores[indexJogador] = jogador;
      pontuacaoText.innerText = jogador.pontuacao.toString();

      this.salvarPontuacao();
    }
  }

  atualizarFaltas(event: any, index: number) {
    this.atualizarPontuacao(event, index, false);
  }

  atualizarPontos(event: any, index: number) {
    this.atualizarPontuacao(event, index, true);
  }

  atualizarPontuacao(event: any, index: number, pontos: boolean) {
    let jogador = this.circuito.voltas[this.circuito.numeroVolta].jogadores[index];
    let valor = event.target.value != "" ? parseInt(event.target.value) : 0;

    if (pontos)
      jogador.pontos = valor;

    else
      jogador.faltas = valor;

    jogador.pontuacao = jogador.pontos - jogador.faltas;

    let pontuacaoText = document.getElementById(`lbPontuacao_${index}`);
    pontuacaoText.innerText = jogador.pontuacao.toString();

    this.salvarPontuacao();
  }

  salvarPontuacao() {
    this.jogadoresService.salvarJogadores(this.jogadores);
    // this.circuitoService.salvarVoltas(this.circuito.voltas);
    this.circuitoService.salvarCircuito();
  }
}
