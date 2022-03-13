import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Jogador } from "../service/jogadores.service";
import { Pista } from "../service/pistas.service";

export interface Circuito {
  pistas: Pista[];
  numeroVolta: number;
  voltas: Volta[];
}

export interface Volta {
  jogadores: Jogador[];
}

@Injectable()
export class CircuitosService {

  public voltas = new BehaviorSubject<Volta[]>([
    {
      jogadores: null,
    }
  ]);

  public circuito = new BehaviorSubject<Circuito>(
    {
      pistas: null,
      numeroVolta: 0,
      voltas: null,
    }
  );

  constructor(
  ) {
    const CircuitoLocalStorage = localStorage.getItem('Circuito');
    const CircuitoRaw = JSON.parse(CircuitoLocalStorage);
    if (!!CircuitoLocalStorage && !!CircuitoRaw) {
      this.circuito.next(CircuitoRaw);
    }
    const VoltasLocalStorage = localStorage.getItem('Voltas');
    const VoltasRaw = JSON.parse(VoltasLocalStorage);
    if (!!VoltasLocalStorage && !!VoltasRaw) {
      this.circuito.next(VoltasRaw);
    }
  }

  salvarCircuito(Circuito: Circuito) {
    Circuito.voltas = this.voltas.value;
    this.circuito.next(Circuito);
    localStorage.setItem('Circuito', JSON.stringify(this.circuito.value));
  }

  salvarVoltas(Voltas: Volta[]) {
    this.voltas.next(Voltas);
    localStorage.setItem('Voltas', JSON.stringify(this.voltas.value));
  }

  atualizaPontuacaoVolta(volta: Volta, numeroVolta: number) {
    const voltas = this.voltas.value;
    voltas[numeroVolta] = volta;
    this.voltas.next(voltas);
    console.log(this.voltas);
    localStorage.setItem('Voltas', JSON.stringify(this.voltas.value));
  }
}
