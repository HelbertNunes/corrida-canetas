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
    circuitoService.circuito.subscribe(value => this.circuito = value);
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.imprimirVencedor()
      }
    });
  }
  ngOnInit() {
  }

  imprimirVencedor(){
    console.log(this.circuito);
    let vencedor = this.definirVencedor();
    let labelNomeVencedor = document.getElementById(`nomeVencedor`);
    let labelPontuacao = document.getElementById(`pontuacaoVencedor`);
    labelNomeVencedor.innerText = vencedor.nome;
    labelPontuacao.innerText = vencedor.pontuacaoTotal.toString();
  }

  definirVencedor(){
    //TODO
    return this.circuito.jogadores[0];
  }

}
