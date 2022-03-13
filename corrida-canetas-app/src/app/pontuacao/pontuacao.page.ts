import { Component, OnInit } from '@angular/core';
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { CircuitosService, Circuito } from "../service/circuito.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.page.html',
  styleUrls: ['./pontuacao.page.scss'],
})

export class PontuacaoPage implements OnInit {

  circuito: Circuito;
  jogadores: Jogador[];

  constructor(
    public router: Router,
    public jogadoresService: JogadoresService,
    public circuitoService: CircuitosService
  ) { }

  ngOnInit() { 
    this.circuitoService.circuito.subscribe(value => {
      this.circuito = value;
    });   
    this.jogadoresService.jogadores.subscribe(value => {
      this.jogadores = value;
    });
  }

  urlImagem(imagem: string) {
    return `../../assets/imgs/icones/${imagem}`;
  }

  selecionarTrofeu(indexJogador: number, indexTrofeu: number) {
    let jogador = this.jogadores[indexJogador];
    let voltaAtual = this.circuito.numeroVolta;
    const trofeuSelecionado = jogador.trofeus.filter(value => {
      return value.selecionado === true;
    });

    if (trofeuSelecionado.length === 1 && !jogador.trofeus[indexTrofeu].selecionado) {
      alert("Você só pode selecionar um troféu por jogador!");
      return;
    }

    else {
      if (trofeuSelecionado[0] === jogador.trofeus[indexTrofeu]) {
        jogador.voltas[voltaAtual].pontosTrofeu = 0;
      }
      else {
        jogador.voltas[voltaAtual].pontosTrofeu = jogador.trofeus[indexTrofeu].pontos;
      }

      jogador.trofeus[indexTrofeu].selecionado = !jogador.trofeus[indexTrofeu].selecionado;
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
    let jogador = this.jogadores[index];
    let voltaAtual = this.circuito.numeroVolta;
    if (event != null) {
      var valor = event.target.value != "" ? parseInt(event.target.value) : 0;
    }

    if (tipoPontuacao == 1)
    jogador.voltas[voltaAtual].bonus = valor;

    if (tipoPontuacao == 2)
    jogador.voltas[voltaAtual].faltas = valor;

    jogador.voltas[voltaAtual].totalVolta = jogador.voltas[voltaAtual].bonus - jogador.voltas[voltaAtual].faltas + jogador.voltas[voltaAtual].pontosTrofeu;
    let pontuacaoText = document.getElementById(`lbPontuacao_${index}`);
    pontuacaoText.innerText = jogador.voltas[voltaAtual].totalVolta.toString();
    this.jogadores[index] = jogador;
    this.jogadoresService.salvarJogadores(this.jogadores);
    console.log(this.jogadores);    
  }

  proximaPista() {

    if (this.circuito.numeroVolta < 2) {
      this.circuito.numeroVolta++;
      this.circuito.jogadores = this.jogadores;
      this.reiniciaTrofeusVisual(this.circuito.numeroVolta);
      this.circuitoService.salvarCircuito(this.circuito);
      console.log(this.circuito);
      this.router.navigate(['comecar-corrida']);
    }
    else {
      this.router.navigate(['vencedor-corrida']);
    }
  }

  reiniciaTrofeusVisual(index: number) {
    this.circuito.jogadores.forEach(jogador => {
      jogador.trofeus.forEach(trofeu => {
        trofeu.selecionado = false;
      });
    });
  }
}