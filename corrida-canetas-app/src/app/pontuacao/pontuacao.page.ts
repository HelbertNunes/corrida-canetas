import { Component, OnInit } from '@angular/core';
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { CircuitosService, Circuito, Volta } from "../service/circuito.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.page.html',
  styleUrls: ['./pontuacao.page.scss'],
})

export class PontuacaoPage implements OnInit {

  circuito: Circuito;

  constructor(
    public router: Router,
    public jogadoresService: JogadoresService,
    public circuitoService: CircuitosService
  ) {
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
      let jogadorCopy = Object.assign(jogador);
      this.circuito.voltas[this.circuito.numeroVolta].jogadores[indexJogador].pontosTrofeu = jogadorCopy.pontosTrofeu;
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
    console.log(index);
    console.log(this.circuito.voltas[this.circuito.numeroVolta]);
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
    this.circuitoService.salvarVolta(this.circuito.voltas[this.circuito.numeroVolta], this.circuito.numeroVolta);
    console.log(this.circuito);
  }

  proximaPista() {

    if (this.circuito.numeroVolta < 2) {
      this.circuito.numeroVolta++;
      this.reiniciaTrofeusVisual(this.circuito.numeroVolta);
      this.router.navigate(['comecar-corrida']);
    }
    else {
      this.router.navigate(['vencedor-corrida']);
    }
  }

  reiniciaTrofeusVisual(index: number) {
    this.circuito.voltas[index].jogadores.forEach(jogador => {
      jogador.trofeus.forEach(trofeu => {
        trofeu.selecionado = false;
      });
    });
  }
}