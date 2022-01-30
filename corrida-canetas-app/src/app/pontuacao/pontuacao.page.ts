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
  
  selecionarTrofeu(indexJogador: number,indexTrofeu: number ) {
    var jogadorSelecionado = this.jogadores[indexJogador];
    jogadorSelecionado.trofeus[indexTrofeu].selecionado = !jogadorSelecionado.trofeus[indexTrofeu].selecionado; 
    this.jogadores[indexJogador] = jogadorSelecionado;
    this.atualizaLabelPontuacao();
  }

  atualizaLabelPontuacao(){
    for (var i = 0; i <= this.jogadores.length; i++) {
      const label = document.getElementById(`lbPontuacao_${i}`);
      this.jogadores[i].pontos = 13 + i;
      label.textContent = this.jogadores[i].pontos.toString();      
    }
  }

  salvaPontuacao() {
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
