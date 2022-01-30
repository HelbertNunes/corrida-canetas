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
    jogadoresService.jogadores.subscribe(value => {
      this.jogadores = value;
    });
    trofeusService.trofeus.subscribe(value => {
      this.trofeus = value;
    });
    circuitoService.circuito.subscribe(value => {
      this.circuito = value;
    });
  }

  ngOnInit() {
  }

  urlImagem(imagem: string) {
    return `../../assets/imgs/icones/${imagem}`;
  }

  selecionarTrofeu(indexJogador: number, indexTrofeu: number) {
    var jogadorSelecionado = this.jogadores[indexJogador];
    jogadorSelecionado.trofeus[indexTrofeu].selecionado = !jogadorSelecionado.trofeus[indexTrofeu].selecionado;
    this.jogadores[indexJogador] = jogadorSelecionado;
    this.atualizaLabelPontuacao();
  }

  atualizaLabelPontuacao() {
    // for (var i = 0; i <= this.jogadores.length; i++) {
    //   const label = document.getElementById(`lbPontuacao_${i}`);
    //   this.jogadores[i].pontos = 13 + i;
    //   label.textContent = this.jogadores[i].pontos.toString();
    // }
  }

  atualizarPontuacaoPontos(event: any, index: number) {
    const faltasInsert = document.getElementById(`faltas_${index}`);
    const pontosInsert = document.getElementById(`pontos_${index}`);    
    var pontos = event.target.value;
    console.log(faltasInsert.textContent);
    var faltas = parseInt(faltasInsert.innerText);
    const label = document.getElementById(`lbPontuacao_${index}`);
    var pontuacaoAtual = +pontos - +faltas;
    label.textContent = pontuacaoAtual.toString();
    console.log(pontos);
    console.log(faltas);
    console.log(pontuacaoAtual);
    console.log(`faltas_${index}`);
    // this.circuito.voltas[this.circuito.numeroVolta].jogadores[index].pontos = +this.circuito.voltas[this.circuito.numeroVolta].jogadores[index].pontos + +event.target.value;
    // console.log(this.circuito.voltas);
    // this.jogadores[index].nome = event.target.value
  }

  atualizarPontuacaoFaltas(event: any, index: number) {
    // this.circuito.voltas[this.circuito.numeroVolta].jogadores[index].pontos = +this.circuito.voltas[this.circuito.numeroVolta].jogadores[index].pontos - +event.target.value;
    // const label = document.getElementById(`lbPontuacao_${index}`);
    // label.textContent = this.circuito.voltas[this.circuito.numeroVolta].jogadores[index].pontos.toString();
    // console.log(this.circuito.voltas);
    // this.jogadores[index].nome = event.target.value
  }

  salvarPontucao() {
    // const pistasSelecionadas = this.pistas.filter(value => {
    //   return value.selecionado === true;
    // });

    // if (pistasSelecionadas.length < 3) {
    //   alert('Selecione as 3 pistas do circuito!');
    //   return;
    // }
    // if (pistasSelecionadas.length > 3) {
    //   alert('Você só pode selecionar 3 pistas para o circuito!');
    //   return;
    // }
    // this.pistasService.salvarpistas(this.pistas);
    // this.router.navigate(['comecar-corrida', { pistasSelecionadas: pistasSelecionadas.map(x => x.nome) }]);
  }

}
