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
  pista: Pista;
}

@Injectable()
export class CircuitosService {

  public voltas = new BehaviorSubject<Volta[]>([
    {
      jogadores: null,
      pista : null
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
    const VoltasLocalStorage = localStorage.getItem('Circuito');
    const VoltasRaw = JSON.parse(VoltasLocalStorage);
    if (!!VoltasLocalStorage && !!VoltasRaw) {
      this.circuito.next(VoltasRaw);
    }
  }

  salvarCircuito() {
    localStorage.setItem('Circuito', JSON.stringify(this.circuito.value));
  }

  salvarVoltas(Voltas: Volta[]) {
    this.voltas.next(Voltas);
    localStorage.setItem('Circuito', JSON.stringify(this.circuito.value));
  }

  salvarVolta(volta: Volta, index: number) {
    this.voltas[index] = volta;
    this.voltas[index].next(volta);
    localStorage.setItem('Circuito', JSON.stringify(this.circuito.value));
  }

}
