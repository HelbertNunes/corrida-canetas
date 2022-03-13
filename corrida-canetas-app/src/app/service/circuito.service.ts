import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Jogador } from "../service/jogadores.service";
import { Pista } from "../service/pistas.service";

export interface Circuito {
  pistas: Pista[];
  numeroVolta: number;
  jogadores: Jogador[];
}

@Injectable()
export class CircuitosService {

  public circuito = new BehaviorSubject<Circuito>(
    {
      pistas: null,
      numeroVolta: 0,
      jogadores: null,
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
    this.circuito.next(Circuito);
    localStorage.setItem('Circuito', JSON.stringify(this.circuito.value));
  }
}
