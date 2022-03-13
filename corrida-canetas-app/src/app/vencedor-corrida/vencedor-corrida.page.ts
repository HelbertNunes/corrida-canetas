import { Component, OnInit } from '@angular/core';
import { CircuitosService, Circuito } from "../service/circuito.service";
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-vencedor-corrida',
  templateUrl: './vencedor-corrida.page.html',
  styleUrls: ['./vencedor-corrida.page.scss'],
})
export class VencedorCorridaPage implements OnInit {

  jogadores: Jogador[];
  circuito: Circuito;

  constructor(
    public router: Router,
    public jogadoresService: JogadoresService,
    public circuitoService: CircuitosService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.imprimirVencedor()
      }
    });
  }
  ngOnInit() {
    this.circuitoService.circuito.subscribe(value => {
      this.circuito = value;
    });
    this.jogadoresService.jogadores.subscribe(value => {
      this.jogadores = value;
    });
  }

  imprimirVencedor() {
    console.log(this.circuito);
    let vencedor = this.definirVencedor();
    let labelNomeVencedor = document.getElementById(`nomeVencedor`);
    let labelPontuacao = document.getElementById(`pontuacaoVencedor`);
    labelNomeVencedor.innerText = vencedor.nome;
    labelPontuacao.innerText = vencedor.pontuacaoTotal.toString();
  }

  definirVencedor() {
    let pontuacaoVencedor = this.encontraPontuacaoVencedor();
    console.log(pontuacaoVencedor);

    const arrayVencedor = this.circuito.jogadores.filter(value => {
      return value.pontuacaoTotal === pontuacaoVencedor;
    });

    //TODO: implementar criterio de desempate
    console.log(arrayVencedor);
    return arrayVencedor[0];

  }

  encontraPontuacaoVencedor() {
    return Math.max.apply(Math, this.circuito.jogadores.map(function (o) { return o.pontuacaoTotal; }));
  }

  finalizarPartida() {

    this.jogadores.forEach(jogador => {
      jogador.voltas.forEach(volta => {
        volta.bonus = 0,
          volta.faltas = 0,
          volta.pontosTrofeu = 0,
          volta.totalVolta = 0
      });
      jogador.pontuacaoTotal = 0;
    });    
    this.circuito.pistas = null;
    this.circuito.numeroVolta = 0;
    this.circuito.jogadores = this.jogadores;    
    this.jogadoresService.salvarJogadores(this.jogadores);
    this.circuitoService.salvarCircuito(this.circuito);
    this.router.navigate(['home']);
  }

}
