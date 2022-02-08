import { Component, OnInit } from '@angular/core';
import { CircuitosService, Circuito, Volta } from "../service/circuito.service";
import { JogadoresService, Jogador } from "../service/jogadores.service";
import { Router } from '@angular/router';

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
  }
  ngOnInit() {
  }

}
