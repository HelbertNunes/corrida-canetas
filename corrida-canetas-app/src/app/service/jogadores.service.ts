import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";
import {Trofeu} from "../service/trofeus.service";

export interface Jogador {
  nome: string;
  faltas: number;
  pontos: number;
  pontuacao: number;
  trofeus: Trofeu[];
}

@Injectable()
export class JogadoresService {

  public jogadores = new BehaviorSubject<Jogador[]>([
    {
      nome: 'Jogador 1',
      faltas: 0,
      pontos: 0,
      pontuacao: 0,
      trofeus: null,
    }
  ]);

  constructor() {
    const jogadoresLocalStorage = localStorage.getItem('jogadores');
    const jogadoresRaw = JSON.parse(jogadoresLocalStorage);
    if (!!jogadoresLocalStorage && !!jogadoresRaw) {
      this.jogadores.next(jogadoresRaw);
    }
  }

  salvarJogadores(jogadores: Jogador[]) {
    this.jogadores.next(jogadores);

    localStorage.setItem('jogadores', JSON.stringify(this.jogadores.value));
  }

}
