import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

export interface Trofeu {
  nome: string;
  imagem: string;
  selecionado: boolean;
}

@Injectable()
export class TrofeusService {

  public trofeus = new BehaviorSubject<Trofeu[]>([
    {
      nome: 'Bronze',
      imagem: 'bronze.png',
      selecionado: false,
    },
    {
      nome: 'Prata',
      imagem: 'prata.png',
      selecionado: false,
    },
    {
      nome: 'Ouro',
      imagem: 'ouro.png',
      selecionado: false,
    },
    {
      nome: 'Diamante',
      imagem: 'diamante.png',
      selecionado: false,
    },

  ]);

  constructor() {
    const TrofeusLocalStorage = localStorage.getItem('trofeus');
    const TrofeusRaw = JSON.parse(TrofeusLocalStorage);
    if (!!TrofeusLocalStorage && !!TrofeusRaw) {
      this.trofeus.next(TrofeusRaw);
    }
  }

  salvarTrofeus(Trofeus: Trofeu[]) {
    this.trofeus.next(Trofeus);
    localStorage.setItem('trofeus', JSON.stringify(this.trofeus.value));
  }

}
